import jwt from 'jsonwebtoken';

export default (roles) => {
    return (req, res, next) => {
        if (req.method === 'OPTIONS') {
            return next();
        }
        try {
            const token: string = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json('No authorization');
            }
            const {roles: userRoles} = jwt.verify(token, process.env.JWT_SECRET);
            let hasRole: boolean = false;
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