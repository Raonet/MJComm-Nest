import * as mongoose from 'mongoose';

export const ForumPraiseSchemas = new mongoose.Schema({
  forumId: String,
  praises: [
    {
    userid: String,
    name: String,
    },
  ],
});
