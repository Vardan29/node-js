import User from '../models/User';
import Role from '../models/Role';
import bcrypt from 'bcryptjs';
import generateToken from '../helpers/generateToken';

class AuthService {
    checkLogin = async (user) => {
        const checkedUser = await User.findOne({email: user.email});

        if (!checkedUser) {
            throw new Error('Incorrect user data.');
        }

        const isEqual = await bcrypt.compare(user.password, checkedUser.password);

        if (!isEqual) {
            throw new Error('Incorrect user data.');
        }

        const token = generateToken(checkedUser._id, checkedUser.roles);

        return [token, checkedUser._id];
    }
    checkRegister = async (user) => {
        const {firstName, lastName, age, password, email} = user;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const v_email = re.test(String(email).toLowerCase());

        if (!firstName || !lastName || !age || password.length < 8 || !v_email) {
            throw new Error('Incorrect data sended.');
        }

        const createdAt = new Date().toTimeString();
        const alreadyExists = await User.findOne({email});

        if (alreadyExists) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const role = await Role.findOne({value: 'USER'});

        return await User.create({
            firstName,
            lastName,
            age,
            email,
            password: hashedPassword,
            createdAt,
            roles: [role.value]
        });
    }
}

export default new AuthService();