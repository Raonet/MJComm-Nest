import { Document } from 'mongoose';
export interface Admin extends Document {
    readonly id: number;
    readonly username: string;
    readonly password: string;
}
