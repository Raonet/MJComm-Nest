import { Document } from 'mongoose';

export interface Repair extends Document {
  readonly title: string;
  readonly content: string;
  readonly createtime: string;
}
