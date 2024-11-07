import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  @IsNotEmpty()
  readonly memberid: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly membername: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly phone: string;
}
