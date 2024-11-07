import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Member {
  @Prop()
  memberid: string;

  @Prop()
  membername: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
