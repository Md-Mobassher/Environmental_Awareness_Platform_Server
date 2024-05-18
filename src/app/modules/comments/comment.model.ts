import mongoose, { Schema } from 'mongoose'
import { IComment } from './comment.interface'

const commentSchema = new Schema<IComment>({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export const Comment = mongoose.model<IComment>('Comment', commentSchema)
