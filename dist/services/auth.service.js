"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const Role_1 = __importDefault(require("../models/Role"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generateToken_1 = __importDefault(require("../helpers/generateToken"));
class AuthService {
    constructor() {
        this.checkLogin = async (user) => {
            const checkedUser = await User_1.default.findOne({ email: user.email });
            if (!checkedUser) {
                throw new Error('Incorrect user data.');
            }
            const isEqual = await bcryptjs_1.default.compare(user.password, checkedUser.password);
            if (!isEqual) {
                throw new Error('Incorrect user data.');
            }
            const token = generateToken_1.default(checkedUser._id, checkedUser.roles);
            return [token, checkedUser._id];
        };
        this.checkRegister = async (user) => {
            const { firstName, lastName, age, password, email } = user;
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const v_email = re.test(String(email).toLowerCase());
            if (!firstName || !lastName || !age || password.length < 8 || !v_email) {
                throw new Error('Incorrect data sended.');
            }
            const createdAt = new Date().toTimeString();
            const alreadyExists = await User_1.default.findOne({ email });
            if (alreadyExists) {
                throw new Error('User already exists');
            }
            const hashedPassword = await bcryptjs_1.default.hash(password, 12);
            const role = await Role_1.default.findOne({ value: 'USER' });
            return await User_1.default.create({
                firstName,
                lastName,
                age,
                email,
                password: hashedPassword,
                createdAt,
                roles: [role.value]
            });
        };
    }
}
exports.default = new AuthService();
//# sourceMappingURL=auth.service.js.map