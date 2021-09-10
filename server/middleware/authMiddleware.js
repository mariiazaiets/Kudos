const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }

    try {
        const {authorization} = req.headers;
        if (!authorization) {
            return res.status(400).json({
                message: 'The user is not authorized. Please, provide \'authorization\' header'
            });
        }

        const [, token] = authorization.split(' ');
        if (!token) {
            return res.status(400).json({
                message: 'Please, include token to request'
            });
        }

        req.user = jwt.verify(token, process.env.SECRET_KEY);
        next();
    }catch (e) {
        res.status(400).json({
            message: e
        });
    }
}