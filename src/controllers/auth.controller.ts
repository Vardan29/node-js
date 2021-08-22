import {Request, Response} from "express";
import AuthService from '../services/auth.service';

class AuthController {
    // the controller function for the login system.
    login = async (req: Request, res: Response): Response => {
        try {
            const [token, userId] = await AuthService.checkLogin(req.body);
            return res.status(200).json({token, userId});
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    // the controller function for the registration system.
    register = async (req: Request, res: Response): Response => {
        try {
            const user = await AuthService.checkRegister(req.body);
            return res.status(201).json({message: user});
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }
}

// Exporting an instance of the controller class.
export default new AuthController();