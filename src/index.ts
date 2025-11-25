import express from "express";
import morgan from "morgan";
import userRoutes from "@/routes/users.route";
import { PORT } from "@/config";
import { handleErrorMiddleware } from "@/middlewares/errorHandler.middleware";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(userRoutes);
app.use(handleErrorMiddleware);

app.listen(PORT);

console.log("Server on port", PORT);
