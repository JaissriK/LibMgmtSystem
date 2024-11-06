import { Document } from 'mongoose';

export interface IMember extends Document {
  readonly membername: string;
  readonly email: string;
  readonly phonenumber: number;
}
