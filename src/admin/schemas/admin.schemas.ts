import * as mongoose from 'mongoose';

export const AdminSchema = new mongoose.Schema({
    id: Number,
    username: String,
    password: String,
});
