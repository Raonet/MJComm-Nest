import { Document } from 'mongoose';

export interface User extends Document {
  readonly user: string;
  readonly pwd: string;
  readonly phone: number;
  readonly avater: string;
  readonly description: string;
  readonly email: string;
  readonly createTime: string;
}
