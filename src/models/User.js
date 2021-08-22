var _a = require('mongoose'), Schema = _a.Schema, model = _a.model;
var schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    createdAt: { type: String, required: true },
    roles: [{ type: String, ref: 'Role' }]
});
module.exports = model('User', schema);
//# sourceMappingURL=User.js.map