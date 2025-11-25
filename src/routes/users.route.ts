import { Router } from "express";
import { UserController } from "@/controllers/users.controller.js";
import { UserDto } from "@/dtos/user.dto.js";
import { validateMiddleware } from "@/middlewares/validation.middleware";

const router = Router();

router.get("/", UserController.getUsers);

router.get("/:id", UserController.getUser);

router.post("/", validateMiddleware(UserDto), UserController.createUser);

router.delete("/:id", UserController.deleteUser);

router.put("/:id", validateMiddleware(UserDto), UserController.updateUser);

export default router;
