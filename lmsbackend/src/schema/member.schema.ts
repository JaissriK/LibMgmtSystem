import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Member {
  @Prop()
  membername: string;

  @Prop()
  email: string;

  @Prop()
  number: number;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
