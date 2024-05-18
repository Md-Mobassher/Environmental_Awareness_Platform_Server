import mongoose, { Schema } from 'mongoose'
import { IUserFollow } from './follow.interface'

const userFollowSchema = new Schema<IUserFollow>({
  followerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  followeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})

export const UserFollow = mongoose.model<IUserFollow>(
  'UserFollow',
  userFollowSchema,
)
