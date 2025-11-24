import { Request, Response } from "express";
import { UserDto } from "src/dtos/user.dto.js";
import userService from "src/services/user.service.js";

export default {
  getUsers: async (req: Request, res: Response) => {
    const users = await userService.getUsers();
    res.json(users);
  },

  getUser: async (req: Request, res: Response) => {
    const id = Number(req.params?.id);
    const user = await userService.getUser(id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  },

  createUser: async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body as UserDto);
    res.status(201).json(user);
  },

  updateUser: async (req: Request, res: Response) => {
    const id = Number(req.params?.id);
    const user = await userService.updateUser(id, req.body as UserDto);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  },

  deleteUser: async (req: Request, res: Response) => {
    const id = Number(req.params?.id);
    const deleted = await userService.deleteUser(id);

    if (!deleted) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted" });
  },
};
