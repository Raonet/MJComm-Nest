import { Document } from 'mongoose';

export interface User extends Document {
  readonly user: string;
  readonly pwd: string;
}
