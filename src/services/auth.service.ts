import bcrypt from 'bcryptjs';
import User from '../models/User';
import Role from '../models/Role';
import {UserRoles} from "../enums/roles.enum";
import {IUser} from "../interfaces/IUser.interface";
import {IRole} from "../interfaces/IRole.interface";
import generateToken from '../helpers/generateToken';

class AuthService {
    // Checking if email and password match with DB data.
    // Then returning access token to log in.
    checkLogin = async (user: IUser): Promise<Array<string>> => {
        const checkedUser: IUser = await User.findOne({email: user.email});

        if (!checkedUser) {
            throw new Error('Incorrect user data.');
        }

        const isEqual: Promise<boolean> = await bcrypt.compare(user.password, checkedUser.password);

        if (!isEqual) {
            throw new Error('Incorrect user data.');
        }

        const token: string = generateToken(checkedUser._id, checkedUser.roles);

        return [token, checkedUser._id];
    }

    // Validating incoming data and registering user if everything is alright.
    checkRegister = async (user: IUser): Promise<IUser> => {
        const {firstName, lastName, age, password, email} = user;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const v_email: boolean = re.test(String(email).toLowerCase());

        if (!firstName || !lastName || !age || password.length < 8 || !v_email) {
            throw new Error('Incorrect data was sent.');
        }

        const createdAt: string = new Date().toTimeString();
        const alreadyExists: IUser = await User.findOne({email});

        if (alreadyExists) {
            throw new Error('User already exists');
        }

        const hashedPassword: Promise<string> = await bcrypt.hash(password, 12);
        const role: IRole = await Role.findOne({value: UserRoles.USER});

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

// Exporting an instance of the service class.
export default new AuthService();