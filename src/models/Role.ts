import {Schema, model} from 'mongoose';
import {UserRoles} from "../enums/roles.enum";

// Initializing mongoose schema for user roles.
const schema = new Schema({
    value: {type: UserRoles, unique: true, default: UserRoles.USER}
});

// Exporting the model of roles schema.
export default model('Role', schema);