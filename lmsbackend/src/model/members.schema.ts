import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type MembersDocument = Members & Document;
@Schema()
export class Members {
    @Prop({required:true, unique:true})
    memberId: string;
    @Prop({required:true})
    memberName: string;
    @Prop({required:true, unique:true, lowercase:true})
    email: string;
    @Prop({required:true})
    number: number;
}

export const MembersSchema = SchemaFactory.createForClass(Members);