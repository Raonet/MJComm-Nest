import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  user: String,
  pwd: String,
});
