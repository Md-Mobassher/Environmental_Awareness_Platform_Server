import { Types } from 'mongoose'

export interface IInitiative {
  _id?: Types.ObjectId
  name: string
  description?: string
  organizer: Types.ObjectId
  participants: Types.ObjectId[]
}
