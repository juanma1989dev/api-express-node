import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError.js";
import { ApiResponse } from "@/utils/ApiResponse.js";

export const handleErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return ApiResponse.error(res, err.message, err.code, err.statusCode);
  }

  return ApiResponse.error(res, "Algo salió mal", "INTERNAL_SERVER_ERROR", 500);
};
