var jwt = require('jsonwebtoken');
var jwtSecret = require('../configs/config').jwtSecret;
module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            return next();
        }
        try {
            var token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json('No authorization');
            }
            var userRoles = jwt.verify(token, jwtSecret).roles;
            var hasRole_1 = false;
            userRoles.forEach(function (role) {
                if (roles.includes(role)) {
                    hasRole_1 = true;
                }
            });
            if (!hasRole_1) {
                return res.status(401).json('You has no access!');
            }
            next();
        }
        catch (err) {
            res.status(401).json('No authorization...');
        }
    };
};
//# sourceMappingURL=role.middleware.js.map