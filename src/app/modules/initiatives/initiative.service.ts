/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from '../../builder/QueryBuilder'
import { IInitiative } from './initiative.interface'
import { Initiative } from './initiative.model'

export const getAllInitiatives = async (query: Record<string, unknown>) => {
  const initiativeQuery = new QueryBuilder(Initiative.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields()
  const result = await initiativeQuery.modelQuery
  const meta = await initiativeQuery.countTotal()
  return {
    meta,
    result,
  }
}

export const createInitiative = async (
  data: IInitiative,
): Promise<IInitiative> => {
  const initiative = new Initiative(data)
  return await initiative.save()
}

// Implement other service methods (getById, update, delete, join)
export const getInitiativeById = async (
  id: string,
): Promise<IInitiative | null> => {
  return await Initiative.findById(id)
}

export const updateInitiative = async (
  id: string,
  data: Partial<IInitiative>,
): Promise<IInitiative | null> => {
  return await Initiative.findByIdAndUpdate(id, data, { new: true })
}

export const deleteInitiative = async (
  id: string,
): Promise<IInitiative | null> => {
  return await Initiative.findByIdAndRemove(id)
}

export const joinInitiative = async (
  id: string,
  userId: string,
): Promise<IInitiative | null> => {
  return await Initiative.findByIdAndUpdate(
    id,
    { $addToSet: { participants: userId } },
    { new: true },
  )
}

export const InitiativeServices = {
  getAllInitiatives,
  createInitiative,
  getInitiativeById,
  updateInitiative,
  deleteInitiative,
  joinInitiative,
}
