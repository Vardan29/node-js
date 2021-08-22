"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    value: { type: String, unique: true, default: 'USER' }
});
exports.default = mongoose_1.model('Role', schema);
//# sourceMappingURL=Role.js.map