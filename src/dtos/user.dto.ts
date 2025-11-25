import { z } from "zod";

export const UserDto = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" })
    .max(80, { message: "Name must not exceed 80 characters" }),

  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" })
    .transform((e) => e.toLowerCase()),
});

export type UserDto = z.infer<typeof UserDto>;
