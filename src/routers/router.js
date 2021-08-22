var Router = require('express').Router;
var userRouter = require('./user.router');
var authRouter = require('./auth.router');
var router = Router();
router.use('/user', userRouter);
router.use('/auth', authRouter);
module.exports = router;
//# sourceMappingURL=router.js.map