import { Document } from 'mongoose';

export interface User extends Document {
  readonly id: number;
  readonly user: string;
  readonly pwd: string;
}
