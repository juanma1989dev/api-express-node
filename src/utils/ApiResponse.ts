import { Response } from "express";

export class ApiResponse {
  static success(
    res: Response,
    data: any = null,
    message = "Operación exitosa",
    code = "OK",
    statusCode = 200
  ) {
    return res.status(statusCode).json({
      success: true,
      code,
      message,
      data,
    });
  }

  static error(
    res: Response,
    message = "Algo salió mal",
    code = "ERROR",
    statusCode = 500,
    data: any = null
  ) {
    return res.status(statusCode).json({
      success: false,
      code,
      message,
      data,
    });
  }
}
