import { buildDTO, emailField, stringField } from "./base.dto.js";

export const userDTO = buildDTO(
  stringField("name", 3, 80),
  emailField("email")
);
