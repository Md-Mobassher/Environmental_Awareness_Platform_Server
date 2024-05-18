import { Types } from 'mongoose'

export interface IEcoFriendlyAction {
  _id?: Types.ObjectId
  userId: Types.ObjectId
  actionType: string
  description?: string
  impactValue: number
  date: Date
}
