import { Types } from 'mongoose'

export interface IPost {
  _id?: Types.ObjectId
  userId: Types.ObjectId
  content: string
  imageUrl?: string
  likes: Types.ObjectId[]
  createdAt: Date
  updatedAt: Date
}
