import { Document } from 'mongoose';

export interface News extends Document {
  readonly title: string;
  readonly content: string;
  readonly createtime: string;
}
