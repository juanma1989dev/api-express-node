import pg from "pg";
import { config } from "./config.js";

export const pool = new pg.Pool({
  user: config.pgUser,
  host: config.pgHost,
  password: config.pgPassword,
  database: config.pgDatabase,
  port: config.pgPort,
});
