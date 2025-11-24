import { Router } from "express";
import usersController from "@/controllers/users.controller.js";
import { UserDto } from "@/dtos/user.dto.js";
import { validationMiddleware } from "@/middlewares/validation.middleware.js";

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
