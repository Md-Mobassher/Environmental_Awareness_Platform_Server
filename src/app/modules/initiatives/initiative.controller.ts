import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { InitiativeServices } from './initiative.service'

const getAllInitiatives = catchAsync(async (req, res) => {
  const result = await InitiativeServices.getAllInitiatives(req.query)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Initiatives are retrived succesfully!',
    data: result,
  })
})

const createInitiative = catchAsync(async (req, res) => {
  const { ...data } = req.body
  const result = await InitiativeServices.createInitiative(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Initiative is created succesfully',
    data: result,
  })
})

const getInitiativeById = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await InitiativeServices.getInitiativeById(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Initiative is retrieved succesfully',
    data: result,
  })
})
const updateInitiative = catchAsync(async (req, res) => {
  const { id } = req.params
  const { ...data } = req.body
  const result = await InitiativeServices.updateInitiative(id, data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Initiative is updated succesfully',
    data: result,
  })
})

const deleteInitiative = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await InitiativeServices.deleteInitiative(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Initiative is delete succesfully',
    data: result,
  })
})

const joinInitiative = catchAsync(async (req, res) => {
  const { id } = req.params
  const { _id: userId } = req.user
  const result = await InitiativeServices.joinInitiative(id, userId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Joined initiative succesfully',
    data: result,
  })
})

export const InitiativeControllers = {
  getAllInitiatives,
  createInitiative,
  getInitiativeById,
  updateInitiative,
  deleteInitiative,
  joinInitiative,
}
