import mongoose, { model, Schema } from 'mongoose'
import { IInitiative } from './initiative.interface'

const initiativeSchema = new Schema<IInitiative>({
  name: { type: String, required: true },
  description: { type: String },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

export const Initiative = model<IInitiative>('Initiative', initiativeSchema)
