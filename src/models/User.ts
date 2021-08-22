import {Schema, model} from 'mongoose';

// Initializing mongoose schema for user.
const schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    createdAt: {type: String, required: true},
    roles: [{type: Number, ref: 'Role'}]
});

// Exporting the model of user schema.
export default model('User', schema);