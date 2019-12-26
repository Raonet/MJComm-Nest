import * as mongoose from 'mongoose';

export const ChatRoomSchema = new mongoose.Schema({
  userid: String,
  avatar: String,
  msg: String,
  createtime: String,
});
