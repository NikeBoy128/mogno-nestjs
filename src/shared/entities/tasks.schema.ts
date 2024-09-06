import mongoose from 'mongoose';

export const TasksShema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});
