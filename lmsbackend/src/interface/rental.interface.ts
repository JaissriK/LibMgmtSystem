import { Document } from 'mongoose';

export interface IRental extends Document {
  readonly rentalid: string;
  readonly memberid: string;
  readonly bookid: string;
  readonly rentstart: Date;
  readonly rentend: Date;
  readonly rentreturn: boolean;
}
