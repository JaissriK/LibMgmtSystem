import { Document } from 'mongoose';

export interface IMember extends Document {
  readonly memberid: string;
  readonly membername: string;
  readonly email: string;
  readonly phone: string;
}
