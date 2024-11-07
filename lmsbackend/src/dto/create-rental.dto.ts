import {
  IsBooleanString,
  IsDateString,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateRentalDto {
  @IsString()
  @IsNotEmpty()
  readonly rentalid: string;

  @IsString()
  @IsNotEmpty()
  readonly memberid: string;

  @IsString()
  @IsNotEmpty()
  readonly bookid: string;

  @IsDateString()
  @IsNotEmpty()
  readonly rentstart: Date;

  @IsDateString()
  @IsNotEmpty()
  readonly rentend: Date;

  @IsBooleanString()
  readonly rentreturn: boolean;
}
