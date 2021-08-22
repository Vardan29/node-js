"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    createdAt: { type: String, required: true },
    roles: [{ type: String, ref: 'Role' }]
});
exports.default = mongoose_1.model('User', schema);
//# sourceMappingURL=User.js.map