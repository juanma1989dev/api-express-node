import pg from "pg";

export const pool = new pg.Pool({
  user: "admin",
  host: "postgres15",
  password: "adm1nP4s5#",
  database: "api-fast-code",
  port: "5432",
});
