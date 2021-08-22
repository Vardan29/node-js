var Router = require('express').Router;
var AuthController = require('../controllers/auth.controller');
var router = Router();
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
module.exports = router;
//# sourceMappingURL=auth.router.js.map