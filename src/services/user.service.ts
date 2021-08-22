import {NativeError} from "mongoose";
import User from '../models/User';
import {IUser} from "../interfaces/IUser.interface";

class UserService {
    // Getting all users.
    getAllUsers = async (): Promise<Array<IUser>> => {
        const users: Array<IUser> = await User.find();
        if (!users.length) {
            throw new Error('Users not found.');
        }
        return users;
    }
    // Getting user by id.
    getUserById = async (id: string): Promise<IUser> => {
        if (!id) {
            throw new Error('Id doesn\'t selected.');
        }
        const user: IUser = await User.findById(id);
        if (!user) {
            throw new Error('User not found.');
        }
        return user;
    }
    // Deleting user by id.
    deleteUserById = async (id): Promise<IUser> => {
        if (!id) {
            throw new Error('Id doesn\'t selected.');
        }
        return User.findByIdAndDelete(id, {},(err: NativeError, doc: any, res: any) => {
            res.status(400).json({ message: err.message });
        });
    }
    // Updating user's data.
    updateUser = async (user: IUser): Promise<IUser> => {
        if (!user._id) {
            throw new Error('Id doesn\'t selected.');
        }
        return User.findByIdAndUpdate(user._id, user, {new: true}, (err: NativeError, doc: any, res: any) => {
            res.status(400).json({ message: err.message });
        });
    }
}

// Exporting an instance of the service class.
export default new UserService();