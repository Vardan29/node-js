const {Router} = require('express');
const UserController = require('../controllers/user.controller');
const role = require('../middlewares/role.middleware');

const router = Router();

router.get('/', role(['ADMIN']), UserController.getAllUsers);
router.get('/:id', role(['ADMIN', 'USER']), UserController.getUserById);
router.put('/change', role(['USER']), UserController.update);
router.delete('/remove/:id', role(['ADMIN']), UserController.delete);

module.exports = router;