import { Document } from 'mongoose';

export interface IBook extends Document {
  readonly bookid: string;
  readonly bookname: string;
  readonly authorname: string;
  readonly copies: number;
}
