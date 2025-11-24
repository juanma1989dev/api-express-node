import { pool } from "../db.js";

export default {
  getUsers: async () => {
    const { rows } = await pool.query(`SELECT * FROM users`);
    return rows;
  },

  getUserById: async (id) => {
    const { rows } = await pool.query(`SELECT * FROM users WHERE id = $1`, [
      id,
    ]);
    return rows[0];
  },

  createUser: async ({ name, email }) => {
    const { rows } = await pool.query(
      `INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *`,
      [name, email]
    );
    return rows[0];
  },

  updateUser: async (id, { name, email }) => {
    const { rows } = await pool.query(
      `UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`,
      [name, email, id]
    );
    return rows[0];
  },

  deleteUser: async (id) => {
    const { rowCount } = await pool.query(`DELETE FROM users WHERE id=$1`, [
      id,
    ]);
    return rowCount > 0;
  },
};
