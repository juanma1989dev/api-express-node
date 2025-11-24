import userRepository from "src/repositories/user.repository.js";

export default {
  getUsers: () => userRepository.getUsers(),

  getUser: (id: number) => userRepository.getUser(id),

  createUser: (data: any) => {
    return userRepository.createUser(data);
  },

  updateUser: (id: number, data: any) => {
    return userRepository.updateUser(id, data);
  },

  deleteUser: (id: number) => {
    return userRepository.deleteUser(id);
  },
};
