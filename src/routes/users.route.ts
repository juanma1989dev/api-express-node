import { Router } from "express";
import usersController from "@/controllers/users.controller.js";
import { UserDto } from "@/dtos/user.dto.js";
import { validateMiddleware } from "@/middlewares/validation.middleware";

const router = Router();

router.get("/users", usersController.getUsers);

router.get("/users/:id", usersController.getUser);

router.post("/users", validateMiddleware(UserDto), usersController.createUser);

router.delete("/users/:id", usersController.deleteUser);

router.put(
  "/users/:id",
  validateMiddleware(UserDto),
  usersController.updateUser
);

export default router;
