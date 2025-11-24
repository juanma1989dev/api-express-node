import { body } from "express-validator";

// Campo string genérico reusable
export const stringField = (field, min = 1, max = 255) => {
  return body(field)
    .trim()
    .notEmpty()
    .withMessage(`${field} is required`)
    .isLength({ min, max })
    .withMessage(`${field} must be between ${min} and ${max} characters`)
    .matches(/^[a-zA-ZÀ-ÿ\s]+$/)
    .withMessage(`${field} contains invalid characters`);
};

// Campo email genérico reusable
export const emailField = (field = "email") => {
  return body(field)
    .notEmpty()
    .withMessage(`Email is required`)
    .isEmail()
    .withMessage(`Must be a valid email`)
    .normalizeEmail();
};

// Campo numérico opcional
export const numberField = (field) => {
  return body(field)
    .optional()
    .isNumeric()
    .withMessage(`${field} must be a number`);
};

// Utility para componer DTOs
export const buildDTO = (...fields) => fields;
