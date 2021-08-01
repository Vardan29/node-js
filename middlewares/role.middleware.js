const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../configs/config');

module.exports = (roles) => {
    return (req, res, next) => {
        if (req.method === 'OPTIONS') {
            return next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json('No authorization');
            }
            const {roles: userRoles} = jwt.verify(token, jwtSecret);
            let hasRole = false;
            userRoles.forEach((role) => {
                if (roles.includes(role)) {
                    hasRole = true;
                }
            });
            if (!hasRole) {
                return res.status(401).json('You has no access!');
            }

            next();
        } catch (err) {
            res.status(401).json('No authorization...');
        }
    }
}