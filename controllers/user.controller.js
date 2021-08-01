const UserService = require('../services/user.service');

class UserController {

    delete = async (req, res) => {
        try {
            const user = await UserService.deleteUser(req.params.id);
            res.status(200).json({message: user});
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }

    update = async (req, res) => {
        try {
            const updatedUser = await UserService.updateUser(req.body);
            res.status(200).json({message: updatedUser});

        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }

    getAllUsers = async (req, res) => {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json({message: users});

        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }

    getUserById = async (req, res) => {
        try {
            const user = await UserService.getUser(req.params.id);
            res.status(200).json({message: user});

        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
}

module.exports = new UserController();