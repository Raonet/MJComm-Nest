import * as mongoose from 'mongoose';

export const ForumSchemas = new mongoose.Schema ({
 title: String,
 content: String,
 description: String,
 createtime: String,
 moditime: String,
 author: String,
});
