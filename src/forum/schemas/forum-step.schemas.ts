import * as mongoose from 'mongoose';

export const ForumStepSchemas = new mongoose.Schema({
  forumId: String,
  steps: [
    {
    userid: String,
    name: String,
    },
  ],
});
