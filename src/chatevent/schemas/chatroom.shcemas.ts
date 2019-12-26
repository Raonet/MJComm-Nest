import * as mongoose from 'mongoose';

export const ChatRoomSchema = new mongoose.Schema({
  name: String,
  data: [
    { userid: String,
      avatar: String,
      msg: String,
      time: String,
    },
  ],
});