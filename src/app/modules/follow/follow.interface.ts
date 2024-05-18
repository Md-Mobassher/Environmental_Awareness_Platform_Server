import { Types } from 'mongoose'

export interface IUserFollow {
  _id?: Types.ObjectId
  followerId: Types.ObjectId
  followeeId: Types.ObjectId
}
