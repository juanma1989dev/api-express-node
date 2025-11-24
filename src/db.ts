import pg from "pg";
import { configdb } from "@/config.js";

export const pool = new pg.Pool({
  user: configdb.pgUser,
  host: configdb.pgHost,
  password: configdb.pgPassword,
  database: configdb.pgDatabase,
  port: configdb.pgPort,
});
