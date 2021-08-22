import jwt from 'jsonwebtoken';
import {UserRoles} from "../enums/roles.enum";

// The function for generating the JWT token.
const generateToken = (id: string, roles: UserRoles): string => {
    return jwt.sign(
        {id, roles},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    );
}

export default generateToken;