import * as mongoose from 'mongoose';

export const NewsSchema = new mongoose.Schema({
  title: String,
  content: String,
  createtime: String,
});
