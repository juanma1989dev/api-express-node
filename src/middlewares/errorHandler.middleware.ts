import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction } from "express";
import errorMap from "node_modules/zod/v3/locales/en.cjs";
import { success } from "zod";

export const handleErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      code: err.code,
      message: err.message,
    });
  }

  res.status(500).json({
    success: false,
    code: "INTERNAL_SERVER_ERROR",
    message: "Algo salió mal",
  });
};
