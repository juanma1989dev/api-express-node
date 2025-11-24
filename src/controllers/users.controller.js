import userService from "../services/user.service.js";

export default {
  getUsers: async (req, res) => {
    const users = await userService.getUsers();
    res.json(users);
  },

  getUser: async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUser(id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  },

  createUser: async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  },

  updateUser: async (req, res) => {
    const { id } = req.params;
    const user = await userService.updateUser(id, req.body);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;
    const deleted = await userService.deleteUser(id);

    if (!deleted) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted" });
  },
};
