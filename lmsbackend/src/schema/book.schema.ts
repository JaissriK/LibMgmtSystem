import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Book {
  @Prop()
  bookid: string;

  @Prop()
  bookname: string;

  @Prop()
  authorname: string;

  @Prop()
  copies: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
