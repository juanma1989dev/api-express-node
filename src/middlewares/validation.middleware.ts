import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { Request, Response, NextFunction, RequestHandler } from 'express';

export function validationMiddleware<T>(type: any): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    // Transforma el body (plain object) a una instancia de nuestra clase DTO
    const dto = plainToClass(type, req.body);
    
    // Valida la instancia del DTO
    validate(dto).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        // Extrae los mensajes de error
        const message = errors
          .flatMap((error: ValidationError) => (error.constraints ? Object.values(error.constraints) : []))
          .join(', ');
        res.status(400).json({ message });
      } else {
        // Si no hay errores, la solicitud continúa
        req.body = dto; // Opcional: sobreescribe el body con la instancia del DTO
        next();
      }
    });
  };
}
