import * as mongoose from 'mongoose';

export const ChatRoomSchema = new mongoose.Schema({
  name: String,
  description: String,
  data: [
    {
      userid: String,
      username: String,
      avatar: String,
      msg: String,
      time: String,
    },
  ],
});
