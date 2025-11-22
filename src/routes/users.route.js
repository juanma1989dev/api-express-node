import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/users", async (req, res) => {
  const { rows } = await pool.query("select * from users");
  res.json(rows);
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query("select * from users where id = $1", [id]);

  if (rows.length === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json(rows[0]);
});

router.post("/users/:id", async (req, res) => {
  const data = req.body;
  const { rows } = await pool.query(
    "insert into users(name, email) values($1, $2) RETURNING *",
    [data.name, data.email]
  );

  return res.json(rows[0]);
});

router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const { rowCount } = pool.query("delete from users where id = $1", [id]);

  if (rowCount === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json({ message: "User deleted" });
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const { rows } = await pool.query(
    "update users set name = $1, email = $2 where id = $3 RETURNING *",
    [data.name, data.email, id]
  );

  return res.json(rows[0]);
});

export default router;
