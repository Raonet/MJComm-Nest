import * as mongoose from 'mongoose';

export const ForumCommentSchemas = new mongoose.Schema({
  forumId: String,
  comments: [
    {
      userId: String,
      userName: String,
      content: String,
      date: String,
      replys: [
        {
          userId: String,
          userName: String,
          content: String,
          date: String,
        },
      ],
    },
  ],
});
