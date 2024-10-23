import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Books } from "./books.model";
import { Members } from "./members.model";

export type RentalsDocument = Rentals & Document;
@Schema()
export class Rentals {
    @Prop({required:true, unique:true})
    rentalId: string;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Books"})
    book: Books;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Members"})
    member: Members;
    @Prop({default: Date.now()})
    rentalDate: Date;
    @Prop({required: true})
    rentalPeriod: number;
    @Prop({required: true, default: true})
    rentalStatus: boolean;
}

export const RentalsSchema = SchemaFactory.createForClass(Rentals);