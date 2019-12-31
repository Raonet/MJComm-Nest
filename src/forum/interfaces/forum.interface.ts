import { Document } from 'mongoose';

export interface Forum extends Document {
  readonly title: string;
  readonly content: any;
  readonly description: string;
  readonly createtime: string;
  readonly moditime: string;
  readonly author: string;
}
