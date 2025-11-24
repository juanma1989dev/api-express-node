import { Router } from "express";
import userController from "../controllers/users.controller.js";
import { validateFields } from "../middlewares/validator.middleware.js";
import { userDTO } from "../dtos/user-dto.js";

const router = Router();

router.get("/users", userController.getUsers);

router.get("/users/:id", userController.getUser);

router.post("/users", userDTO, validateFields, userController.createUser);

router.delete("/users/:id", userController.deleteUser);

router.put("/users/:id", userDTO, validateFields, userController.updateUser);

export default router;
