import { Types } from 'mongoose'

export interface IComment {
  _id?: Types.ObjectId
  postId: Types.ObjectId
  userId: Types.ObjectId
  content: string
  createdAt: Date
  updatedAt: Date
}
