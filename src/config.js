import dotenv from "dotenv";

dotenv.config();

export const configdb = {
  pgUser: process.env.PG_USER,
  pgPassword: process.env.PG_PASSWORD,
  pgHost: process.env.PG_HOST,
  pgDatabase: process.env.PG_DATABASE,
  pgPort: process.env.PG_PORT,
};

export const PORT = process.env.APP_PORT || 5173;
