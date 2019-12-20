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
    { forumid: String },
  ],
  jionf: [
    { forumid: String },
  ],
  praise: [
    { forumid: String },
  ],
  step: [
    { forumid: String },
  ],
});
