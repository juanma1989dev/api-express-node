import { Request, Response } from "express";
import { UserService } from "@/services/user.service";
import { ApiResponse } from "@/utils/ApiResponse.js";
import { UserDto } from "@/dtos/user.dto.js";

export class UserController {
  static async getUsers(req: Request, res: Response) {
    const users = await UserService.getUsers();
    return ApiResponse.success(res, users);
  }

  static async getUser(req: Request, res: Response) {
    const id = Number(req.params.id);
    const user = await UserService.getUser(id);
    return ApiResponse.success(res, user);
  }

  static async createUser(req: Request, res: Response) {
    const user = await UserService.createUser(req.body as UserDto);
    return ApiResponse.success(
      res,
      user,
      "Usuario creado correctamente",
      "CREATED",
      201
    );
  }

  static async updateUser(req: Request, res: Response) {
    const id = Number(req.params.id);
    const updatedUser = await UserService.updateUser(id, req.body as UserDto);
    return ApiResponse.success(
      res,
      updatedUser,
      "Usuario actualizado correctamente"
    );
  }

  static async deleteUser(req: Request, res: Response) {
    const result = await UserService.deleteUser(Number(req.params.id));
    return ApiResponse.success(res, result);
  }
}
