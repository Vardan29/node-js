import {Schema, model} from 'mongoose';
import {UserInterface} from '../interfaces/interfaces';

const schema = new Schema<UserInterface>({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    createdAt: {type: String, required: true},
    roles: [{type: String, ref: 'Role'}]
});

export default model<UserInterface>('User', schema);