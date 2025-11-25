import userRepository from "@/repositories/user.repository.js";
import { AppError } from "@/utils/AppError.js";
import { UserDto } from "@/dtos/user.dto.js";

export class UserService {
  static async getUsers() {
    return await userRepository.getUsers();
  }

  static async getUser(id: number) {
    const user = await userRepository.getUser(id);
    if (!user) throw new AppError("User not found", "USER_NOT_FOUND", 404);
    return user;
  }

  static async createUser(data: UserDto) {
    const existingUser = await userRepository.getUserByEmail(data.email);
    if (existingUser) {
      throw new AppError("El usuario ya existe", "RECORD_ALREADY_EXISTS", 409);
    }
    return await userRepository.createUser(data);
  }

  static async updateUser(id: number, data: UserDto) {
    const updatedUser = await userRepository.updateUser(id, data);
    if (!updatedUser)
      throw new AppError("User not found", "USER_NOT_FOUND", 404);
    return updatedUser;
  }

  static async deleteUser(id: number) {
    const deleted = await userRepository.deleteUser(id);
    if (!deleted) throw new AppError("User not found", "USER_NOT_FOUND", 404);
    return { message: "Usuario eliminado correctamente" };
  }
}
