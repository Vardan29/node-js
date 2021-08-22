import {Request, Response} from "express";
import UserService from '../services/user.service';

class UserController {
    // The controller function for deleting user by id.
    delete = async (req: Request, res: Response): Response => {
        try {
            const user = await UserService.deleteUserById(req.params.id);
            return res.status(200).json({message: user});
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    // The controller function for updating user.
    update = async (req: Request, res: Response): Response => {
        try {
            const updatedUser = await UserService.updateUser(req.body);
            return res.status(200).json({message: updatedUser});
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    // The controller function getting all users.
    getAllUsers = async (req: Request, res: Response): Response => {
        try {
            const users = await UserService.getAllUsers();
            return res.status(200).json({message: users});
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }
    // The controller function getting user by id.
    getUserById = async (req: Request, res: Response): Response => {
        try {
            const user = await UserService.getUserById(req.params.id);
            return res.status(200).json({message: user});

        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }
}

//Exporting an instance of the controller class.
export default new UserController();