"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (roles) => {
    return (req, res, next) => {
        if (req.method === 'OPTIONS') {
            return next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json('No authorization');
            }
            const { roles: userRoles } = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
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
        }
        catch (err) {
            res.status(401).json('No authorization...');
        }
    };
};
//# sourceMappingURL=role.middleware.js.map