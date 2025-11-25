import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { Transform } from "class-transformer";

export class UserDto {
  @Length(3, 80, { message: "Name must be between 3 and 80 characters" })
  @IsNotEmpty({ message: "Name is required" })
  name!: string;

  @IsNotEmpty({ message: "Email is required" })
  @IsEmail({}, { message: "Must be a valid email" })
  @Transform(({ value }) => value.toLowerCase())
  email!: string;
}
