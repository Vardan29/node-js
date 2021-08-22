import {Schema, model} from 'mongoose';

type roles = 'USER' | 'ADMIN';

interface Role {
    value: roles
}

const schema = new Schema<Role>({
    value: {type: String, unique: true, default: 'USER'}
});

export default model<Role>('Role', schema);