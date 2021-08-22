var Router = require('express').Router;
var UserController = require('../controllers/user.controller');
var role = require('../middlewares/role.middleware');
var router = Router();
router.get('/', role(['ADMIN']), UserController.getAllUsers);
router.get('/:id', role(['ADMIN', 'USER']), UserController.getUserById);
router.put('/change', role(['USER']), UserController.update);
router["delete"]('/remove/:id', role(['ADMIN']), UserController["delete"]);
module.exports = router;
//# sourceMappingURL=user.router.js.map