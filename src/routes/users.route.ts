import { Router } from "express";
import usersController from "src/controllers/users.controller.js";
import { UserDto } from "src/dtos/user.dto.js";
import { validationMiddleware } from "src/middlewares/validation.middleware.js";

const router = Router();

router.get("/users", usersController.getUsers);

router.get("/users/:id", usersController.getUser);

router.post(
  "/users",
  validationMiddleware(UserDto),
  usersController.createUser
);

router.delete("/users/:id", usersController.deleteUser);

router.put(
  "/users/:id",
  validationMiddleware(UserDto),
  usersController.updateUser
);

export default router;
