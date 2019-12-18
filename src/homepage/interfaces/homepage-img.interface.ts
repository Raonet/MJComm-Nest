import { Document } from 'mongoose';

export interface HomePageImg extends Document {
  readonly url: string;
}
