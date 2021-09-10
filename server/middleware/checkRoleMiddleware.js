const jwt = require('jsonwebtoken');

module.exports = function (role) {
    return function (req, res, next) {
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
            const decoded = jwt.verify(token, process.env.SECRET_KEY);

            if (decoded.role !== role) {
                return res.status(403).json({
                    message: 'You don\'t have access'
                })
            }

                req.user = decoded;
            next();
        }catch (e) {
            res.status(400).json({
                message: e
            });
        }
    }
}