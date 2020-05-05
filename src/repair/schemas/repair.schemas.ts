import * as mongoose from 'mongoose';

export const RepairSchema = new mongoose.Schema({
  title: String,
  content: String,
  createtime: String,
});
