import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { UserServices } from './user.service'

const createUser = catchAsync(async (req, res) => {
  const { ...userData } = req.body
  const result = await UserServices.createUserIntoDB(req.file, userData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created succesfully!',
    data: result,
  })
})

const updateUser = catchAsync(async (req, res) => {
  const { ...userData } = req.body
  const { _id: userId } = req.user
  console.log(req.user, userData)
  const result = await UserServices.updateUserIntoDB(userId, userData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is updated succesfully',
    data: result,
  })
})

const getMe = catchAsync(async (req, res) => {
  const { email, role } = req.body
  const result = await UserServices.getMe(email, role)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is retrieved succesfully',
    data: result,
  })
})
export const UserControllers = {
  createUser,
  updateUser,
  getMe,
}
