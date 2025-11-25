import { validate, ValidationError } from "class-validator";
import { plainToInstance } from "class-transformer";
import { Request, Response, NextFunction, RequestHandler } from "express";

export function validationMiddleware<T extends object>(
  dtoClass: new () => T
): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToInstance(dtoClass, req.body);

    const errors = await validate(dto, {
      whitelist: true,
      forbidNonWhitelisted: false,
      skipMissingProperties: false,
    });

    if (errors.length === 0) {
      req.body = dto;
      return next();
    }

    const formatted = formatErrorsWithCodes(errors);

    return res.status(400).json({
      success: false,
      code: "VALIDATION_ERROR",
      message: "Validation failed",
      errors: formatted,
    });
  };
}

function formatErrorsWithCodes(errors: ValidationError[]) {
  const result: Array<{ field: string; message: string }> = [];

  const traverse = (list: ValidationError[], parent?: string) => {
    for (const error of list) {
      const field = parent ? `${parent}.${error.property}` : error.property;

      if (error.constraints) {
        const firstKey = Object.keys(error.constraints)[0];
        const firstMessage = error.constraints[firstKey];
        const code = `ERR_${firstKey.toUpperCase()}`;

        result.push({
          field,
          message: firstMessage,
          // code,
        });
      }

      if (error.children?.length) {
        traverse(error.children, field);
      }
    }
  };

  traverse(errors);

  return result;
}
