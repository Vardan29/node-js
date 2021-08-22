"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = __importDefault(require("../services/auth.service"));
class AuthController {
    constructor() {
        this.login = async (req, res) => {
            try {
                const [token, userId] = await auth_service_1.default.checkLogin(req.body);
                res.status(200).json({ token, userId });
            }
            catch (err) {
                res.status(500).json({ message: err.message });
            }
        };
        this.register = async (req, res) => {
            try {
                const user = await auth_service_1.default.checkRegister(req.body);
                res.status(201).json({ message: user });
            }
            catch (err) {
                res.status(500).json({ message: err.message });
            }
        };
    }
}
exports.default = new AuthController();
//# sourceMappingURL=auth.controller.js.map