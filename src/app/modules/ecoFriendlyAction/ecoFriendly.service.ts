import { IEcoFriendlyAction } from './ecoFriendly.interface'
import { EcoFriendlyAction } from './ecoFriendly.model'

// Service methods for interacting with eco-friendly actions
export const logAction = async (
  data: IEcoFriendlyAction,
): Promise<IEcoFriendlyAction> => {
  const action = new EcoFriendlyAction(data)
  return await action.save()
}

export const getUserActions = async (
  userId: string,
): Promise<IEcoFriendlyAction[]> => {
  return await EcoFriendlyAction.find({ userId })
}

export const calculateUserImpact = async (userId: string): Promise<number> => {
  const actions = await EcoFriendlyAction.find({ userId })
  return actions.reduce((total, action) => total + action.impactValue, 0)
}

export const EcoFriendlyActionServices = {
  logAction,
  getUserActions,
  calculateUserImpact,
}
