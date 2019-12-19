import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  user: String,
  pwd: String,
  phone: Number,
  avater: String,
  description: String,
  email: String,
  createTime: String,
  createf: [
    { _id: String },
  ],
  jionf: [
    { _id: String },
  ],
  praise: [
    { _id: String },
  ],
   step: [
    { _id: String },
  ],
});
