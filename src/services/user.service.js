import userRepository from "../repositories/user.repository.js";

export default {
  getUsers: () => userRepository.getUsers(),

  getUser: (id) => userRepository.getUserById(id),

  createUser: (data) => {
    return userRepository.createUser(data);
  },

  updateUser: (id, data) => {
    return userRepository.updateUser(id, data);
  },

  deleteUser: (id) => {
    return userRepository.deleteUser(id);
  },
};
