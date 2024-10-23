import { Prop, Schema, SchemaFactory } from "nestjs/mongoose";

export type BooksDocument = Books & Document;
@Schema()
export class Books {
    @Prop({required:true, unique:true})
    bookId: string;
    @Prop({required:true})
    bookName: string;
    @Prop({required:true})
    authorName: string;
    @Prop({required:true})
    copies: number;
}

export const BooksSchema = SchemaFactory.createForClass(Books);