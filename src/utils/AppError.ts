export class AppError extends Error {
  public code: string;
  public statusCode: number;

  constructor(message: string, code = "ERROR", statusCode = 500) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}
