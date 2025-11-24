import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class UserDto {
  @IsString({ message: 'name must be a string' })
  @IsNotEmpty({ message: 'name is required' })
  @Length(3, 80, { message: 'name must be between 3 and 80 characters' })
  name!: string;

  @IsEmail({}, { message: 'Must be a valid email' })
  @IsNotEmpty({ message: 'email is required' })
  email!: string;
}
