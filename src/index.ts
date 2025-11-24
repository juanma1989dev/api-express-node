import express from "express";
import morgan from "morgan";
import userRoutes from "src/routes/users.route";
import { PORT } from "src/config";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(userRoutes);

app.listen(PORT);

console.log("Server on port", PORT);
