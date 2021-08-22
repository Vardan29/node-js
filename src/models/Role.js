var _a = require('mongoose'), Schema = _a.Schema, model = _a.model;
var schema = new Schema({
    value: { type: String, unique: true, "default": 'USER' }
});
module.exports = model('Role', schema);
//# sourceMappingURL=Role.js.map