import mongoose, { model, Schema } from 'mongoose'
import { IEcoFriendlyAction } from './ecoFriendly.interface'

const ecoFriendlyActionSchema = new Schema<IEcoFriendlyAction>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  actionType: { type: String, required: true },
  description: { type: String },
  impactValue: { type: Number, required: true },
  date: { type: Date, default: Date.now },
})

export const EcoFriendlyAction = model<IEcoFriendlyAction>(
  'EcoFriendlyAction',
  ecoFriendlyActionSchema,
)
