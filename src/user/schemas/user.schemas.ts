import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: Number,
  user: String,
  pwd: String,
});
