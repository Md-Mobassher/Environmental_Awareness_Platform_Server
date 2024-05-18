import mongoose, { Schema } from 'mongoose'
import { IPost } from './post.interface'

const postSchema = new Schema<IPost>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  imageUrl: { type: String },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export const Post = mongoose.model<IPost>('Post', postSchema)
