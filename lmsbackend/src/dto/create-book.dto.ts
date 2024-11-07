import {
  IsNotEmpty,
  IsNumberString,
  IsString,
  MaxLength,
} from 'class-validator';

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

  @IsNumberString()
  @IsNotEmpty()
  readonly copies: number;
}
