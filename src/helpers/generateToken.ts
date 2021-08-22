import jwt from 'jsonwebtoken';

const generateToken = (id, roles): string => {
    return jwt.sign(
        {id, roles},
        process.env.JWT_SECRET,
        {expiresIn: "24h"}
    );
}

export default generateToken;