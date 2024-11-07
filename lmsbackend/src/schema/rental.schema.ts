import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Rental {
  @Prop()
  rentalid: string;

  @Prop()
  memberid: string;

  @Prop()
  bookid: string;

  @Prop({ default: Date.now() })
  rentstart: Date;

  @Prop()
  rentend: Date;

  @Prop()
  rentreturn: boolean;
}

export const RentalSchema = SchemaFactory.createForClass(Rental);
