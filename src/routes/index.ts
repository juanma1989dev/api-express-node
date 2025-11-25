import { Router } from "express";

import userRoutes from "@/routes/users.route";

const router = Router();

// Rutas
router.use("/users", userRoutes);

export default router;
