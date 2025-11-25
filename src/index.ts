import express from "express";
import morgan from "morgan";
import routes from "@/routes/index";
import { PORT } from "@/config";
import { handleErrorMiddleware } from "@/middlewares/errorHandler.middleware";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", routes);

app.use(handleErrorMiddleware);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
