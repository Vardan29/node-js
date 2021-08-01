const User = require('../models/User');

class UserService {
    getAllUsers = async () => {
        return await User.find();
    }
    getUser = async (id) => {
        if (!id) {
            throw new Error('Id doesn\'t selected.');
        }
        return await User.findById(id);
    }
    deleteUser = async (id) => {
        if (!id) {
            throw new Error('Id doesn\'t selected.');
        }
        return await User.findByIdAndDelete(id);
    }
    updateUser = async (user) => {
        if (!user._id) {
            throw new Error('Id doesn\'t selected.');
        }
        return await User.findByIdAndUpdate(user._id, user, {new: true});
    }
}

module.exports = new UserService();