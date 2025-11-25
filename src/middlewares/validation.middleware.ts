import { z } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateMiddleware = (schema: z.ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const body = req.body ?? {};

    const result = schema.safeParse(body);

    if (!result.success) {
      const formattedErrors = formatZodErrors(result.error.issues);

      return res.status(400).json({
        success: false,
        code: "VALIDATION_ERROR",
        message: "Validation failed",
        errors: formattedErrors,
      });
    }

    req.body = result.data;
    next();
  };
};

function formatZodErrors(issues: z.ZodIssue[]) {
  const errors: Record<string, string[]> = {};

  for (const issue of issues) {
    const pathString = issue.path
      .filter((p): p is string | number => typeof p !== "symbol")
      .join(".");

    const path = pathString || "_global";
    if (!errors[path]) errors[path] = [];

    let message = issue.message;
    if (
      issue.code === "invalid_type" &&
      message.includes("expected string, received undefined")
    ) {
      const fieldName = path.charAt(0).toUpperCase() + path.slice(1);
      message = `${fieldName} is required`;
    }

    errors[path].push(message);
  }

  return errors;
}
