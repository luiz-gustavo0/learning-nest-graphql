import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'O campo não pode estar vazio' })
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsNotEmpty({ message: 'O campo não pode estar vazio' })
  @IsOptional()
  email?: string;
}
