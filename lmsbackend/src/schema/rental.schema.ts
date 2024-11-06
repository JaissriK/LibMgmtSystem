import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Rental {
  @Prop()
  bookname: string;

  @Prop()
  membername: string;

  @Prop()
  rentaldate: number;

  @Prop()
  rentalperiod: number;

  @Prop()
  rentalstatus: boolean;
}

export const RentalSchema = SchemaFactory.createForClass(Rental);
