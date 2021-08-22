import {Router} from 'express';
import userRouter from './user.router';
import authRouter from './auth.router';

const router = Router();

router.use('/v1/user',userRouter);
router.use('/v1/auth',authRouter);

export default router;