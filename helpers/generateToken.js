const {jwtSecret} = require('../configs/config');
const jwt = require('jsonwebtoken');

const generateToken = (id,roles) => {
    return  token = jwt.sign(
        {id, roles},
        jwtSecret,
        {expiresIn: "1h"}
    );
}

module.exports = generateToken;