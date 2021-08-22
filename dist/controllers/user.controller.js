"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    constructor() {
        this.delete = async (req, res) => {
            try {
                const user = await user_service_1.default.deleteUser(req.params.id);
                res.status(200).json({ message: user });
            }
            catch (err) {
                res.status(500).json({ message: err.message });
            }
        };
        this.update = async (req, res) => {
            try {
                const updatedUser = await user_service_1.default.updateUser(req.body);
                res.status(200).json({ message: updatedUser });
            }
            catch (err) {
                res.status(500).json({ message: err.message });
            }
        };
        this.getAllUsers = async (req, res) => {
            try {
                const users = await user_service_1.default.getAllUsers();
                res.status(200).json({ message: users });
            }
            catch (err) {
                res.status(500).json({ message: err.message });
            }
        };
        this.getUserById = async (req, res) => {
            try {
                const user = await user_service_1.default.getUser(req.params.id);
                res.status(200).json({ message: user });
            }
            catch (err) {
                res.status(500).json({ message: err.message });
            }
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=user.controller.js.map