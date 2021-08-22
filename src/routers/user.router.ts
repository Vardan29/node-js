import {Router} from 'express';
import role  from '../middlewares/role.middleware';
import UserController from '../controllers/user.controller';
import {UserRoles} from "../enums/roles.enum";

const router = Router();

// User routes for authorized members.
router.get('/', role([UserRoles.ADMIN]), UserController.getAllUsers);
router.get('/:id', role([UserRoles.ADMIN, UserRoles.USER]), UserController.getUserById);
router.put('/change', role([UserRoles.USER]), UserController.update);
router.delete('/remove/:id', role([UserRoles.USER]), UserController.delete);

export default router;