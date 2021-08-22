"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (id, roles) => {
    return jsonwebtoken_1.default.sign({ id, roles }, process.env.JWT_SECRET, { expiresIn: "24h" });
};
exports.default = generateToken;
//# sourceMappingURL=generateToken.js.map