import userRepository from "@/repositories/user.repository.js";
import { AppError } from "@/utils/AppError";

export default {
  getUsers: () => userRepository.getUsers(),

  getUser: (id: number) => userRepository.getUser(id),

  createUser: async (data: any) => {
    const user = await userRepository.getUserByEmail(data.email);
    if (user) {
      throw new AppError("El usuario ya existe", "USER_ALREADY_EXISTS", 409);
    }

    return userRepository.createUser(data);
  },

  updateUser: (id: number, data: any) => {
    return userRepository.updateUser(id, data);
  },

  deleteUser: (id: number) => {
    return userRepository.deleteUser(id);
  },
};
