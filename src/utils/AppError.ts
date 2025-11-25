export class AppError extends Error {
  public statusCode: number;
  public code: string;

  constructor(message: string, code = "APP_ERROR", statusCode = 400) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}
