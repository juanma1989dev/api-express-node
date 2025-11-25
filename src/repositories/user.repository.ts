import { pool } from "@/db.js";
import { UserDto } from "@/dtos/user.dto.js";

export default {
  getUsers: async () => {
    const { rows } = await pool.query(`SELECT * FROM users`);
    return rows;
  },

  getUser: async (id: number) => {
    const { rows } = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
    return rows[0] ?? null;
  },

  createUser: async (data: UserDto) => {
    const { rows } = await pool.query(
      `INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *`,
      [data.name, data.email]
    );
    return rows[0];
  },

  updateUser: async (id: number, data: UserDto) => {
    const { rows } = await pool.query(
      `UPDATE users 
       SET name=$1, email=$2 
       WHERE id=$3 
       RETURNING *`,
      [data.name, data.email, id]
    );

    return rows[0] ?? null;
  },

  deleteUser: async (id: number) => {
    const result = await pool.query(`DELETE FROM users WHERE id=$1`, [id]);

    return (result.rowCount ?? 0) > 0;
  },

  getUserByEmail: async (email: string) => {
    // crea la logica para recuperar el usuario por el email
    const { rows } = await pool.query(`SELECT * FROM users WHERE email=$1`, [
      email,
    ]);
    return rows[0] ?? null;
  },
};
