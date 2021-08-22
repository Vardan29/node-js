import jwt from 'jsonwebtoken';
import {NextFunction, Request, Response} from "express";

export default (roles): Response | void => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.method === 'OPTIONS') {
            return next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({message: 'No authorization'});
            }

            const {roles: userRoles} = jwt.verify(token, process.env.JWT_SECRET);
            let hasRole = false;

            userRoles.forEach((role) => {
                if (roles.includes(role)) {
                    hasRole = true;
                }
            });

            if (!hasRole) {
                return res.status(401).json({message: 'You has no access!'});
            }

            next();
        } catch (err) {
            next(err);
        }
    }
}