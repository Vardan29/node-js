import {Router} from 'express';
import userRouter from './user.router';
import authRouter from './auth.router';

const router = Router();

// All Routing paths go here.
router.use('/user',userRouter);
router.use('/auth',authRouter);

export default router;