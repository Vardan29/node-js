import AuthService from '../services/auth.service';

class AuthController {
    login = async (req, res) => {
        try {
            const [token, userId] = await AuthService.checkLogin(req.body);
            res.status(200).json({token, userId});

        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
    register = async (req, res) => {
        try {
            const user = await AuthService.checkRegister(req.body);
            res.status(201).json({message: user});

        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
}

export default new AuthController();