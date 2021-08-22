import {Router} from 'express';
import UserController from '../controllers/user.controller';
import role from '../middlewares/role.middleware';

const router = Router();

router.get('/', role(['ADMIN']), UserController.getAllUsers);
router.get('/:id', role(['ADMIN', 'USER']), UserController.getUserById);
router.put('/change', role(['USER']), UserController.update);
router.delete('/remove/:id', role(['ADMIN']), UserController.delete);

export default router;