"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
class UserService {
    constructor() {
        this.getAllUsers = async () => {
            return await User_1.default.find();
        };
        this.getUser = async (id) => {
            if (!id) {
                throw new Error('Id doesn\'t selected.');
            }
            return await User_1.default.findById(id);
        };
        this.deleteUser = async (id) => {
            if (!id) {
                throw new Error('Id doesn\'t selected.');
            }
            return await User_1.default.findByIdAndDelete(id);
        };
        this.updateUser = async (user) => {
            if (!user._id) {
                throw new Error('Id doesn\'t selected.');
            }
            return await User_1.default.findByIdAndUpdate(user._id, user, { new: true });
        };
    }
}
exports.default = new UserService();
//# sourceMappingURL=user.service.js.map