import { Router } from "express";
import { UserController } from "@/controllers/users.controller.js";
import { UserDto } from "@/dtos/user.dto.js";
import { validateMiddleware } from "@/middlewares/validation.middleware";

const router = Router();

router.get("/users", UserController.getUsers);

router.get("/users/:id", UserController.getUser);

router.post("/users", validateMiddleware(UserDto), UserController.createUser);

router.delete("/users/:id", UserController.deleteUser);

router.put(
  "/users/:id",
  validateMiddleware(UserDto),
  UserController.updateUser
);

export default router;
