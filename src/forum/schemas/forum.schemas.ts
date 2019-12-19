import * as mongoose from 'mongoose';

export const ForumSchema = new mongoose.Schema ({
 title: String,
 content: String,
 createtime: String,
 moditime: String,
 heat: Number,
 author: {
   _id: String,
   name: String,
   avatar: String,
  },
 praise: [
    {
     _id: String,
     name: String,
    },
  ],
 step: [
    {
     _id: String,
     name: String,
    },
  ],
});
