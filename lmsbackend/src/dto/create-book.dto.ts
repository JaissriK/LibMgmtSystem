import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  readonly bookid: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly bookname: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly authorname: string;

  @IsNumber()
  @IsNotEmpty()
  readonly copies: number;
}
