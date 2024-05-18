import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { EcoFriendlyActionServices } from './ecoFriendly.service'

const logAction = catchAsync(async (req, res) => {
  const result = await EcoFriendlyActionServices.logAction(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Initiatives are retrived succesfully!',
    data: result,
  })
})

const getUserActions = catchAsync(async (req, res) => {
  const { ...data } = req.body
  const result = await EcoFriendlyActionServices.getUserActions(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Initiative is created succesfully',
    data: result,
  })
})

const calculateUserImpact = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await EcoFriendlyActionServices.calculateUserImpact(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Initiative is retrieved succesfully',
    data: result,
  })
})

export const EcoFriendlyActionControllers = {
  logAction,
  getUserActions,
  calculateUserImpact,
}
