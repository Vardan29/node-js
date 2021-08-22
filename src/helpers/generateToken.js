var jwtSecret = require('../configs/config').jwtSecret;
var jwt = require('jsonwebtoken');
var generateToken = function (id, roles) {
    return token = jwt.sign({ id: id, roles: roles }, jwtSecret, { expiresIn: "1h" });
};
module.exports = generateToken;
//# sourceMappingURL=generateToken.js.map