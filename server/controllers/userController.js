const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Basket} = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
}

class UserController {
    async registration(req, res) {
        try {
            const {email, password, role} = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    message: 'Incorrect email or password'
                });
            }

            const candidate = await User.findOne({where: {email}});
            if (candidate) {
                return res.status(400).json({
                    message: 'User with this email already exists'
                });
            }

            const hashPassword = await bcrypt.hash(password, 10);
            const user = await User.create({email, role, password: hashPassword});
            const basket = await Basket.create({userId: user.id});
            const token = generateJwt(user.id, user.email, user.role);
            return res.status(200).json({token});
        } catch (e) {
            res.status(400).json({
                message: e
            });
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({where: {email}});
            if (!user) {
                return res.status(400).json({
                    message: 'Invalid username or password'
                });
            }

            //If such a user exists, we check the password
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).send({
                    message: 'Invalid username or password'
                });
            }

            //If passwords match - generate JWT token
            const token = generateJwt(user.id, user.email, user.role);
            return res.status(200).json({token});
        } catch (e) {
            res.status(400).json({
                message: e
            });
        }
    }

    async checkAuth(req, res) {
        try {
            const token = generateJwt(req.user.id, req.user.email, req.user.role);
            return res.status(200).json({token});
        } catch (e) {
            res.status(400).json({
                message: e
            });
        }
    }
}

module.exports = new UserController();