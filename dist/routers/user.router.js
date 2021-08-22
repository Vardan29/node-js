"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const role_middleware_1 = __importDefault(require("../middlewares/role.middleware"));
const router = express_1.Router();
router.get('/', role_middleware_1.default(['ADMIN']), user_controller_1.default.getAllUsers);
router.get('/:id', role_middleware_1.default(['ADMIN', 'USER']), user_controller_1.default.getUserById);
router.put('/change', role_middleware_1.default(['USER']), user_controller_1.default.update);
router.delete('/remove/:id', role_middleware_1.default(['ADMIN']), user_controller_1.default.delete);
exports.default = router;
//# sourceMappingURL=user.router.js.map