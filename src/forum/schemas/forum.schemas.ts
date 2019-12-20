import * as mongoose from 'mongoose';

export const ForumSchema = new mongoose.Schema ({
 title: String,
 content: String,
 description: String,
 createtime: String,
 moditime: String,
 heat: Number,
 author: {
   userid: String,
   name: String,
   avatar: String,
  },
 praise: [
    {
     userid: String,
     name: String,
    },
  ],
 step: [
    {
     userid: String,
     name: String,
    },
  ],
});
