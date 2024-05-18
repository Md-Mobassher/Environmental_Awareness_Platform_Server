import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { FollowServices } from './follow.service'

const followUser = catchAsync(async (req, res) => {
  const result = await FollowServices.followUser(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Following succesfully!',
    data: result,
  })
})

const getFollowers = catchAsync(async (req, res) => {
  const { _id: userId } = req.user
  const result = await FollowServices.getFollowers(userId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Followers retrived succesfully',
    data: result,
  })
})

const getFollowees = catchAsync(async (req, res) => {
  const { _id: userId } = req.user
  const result = await FollowServices.getFollowees(userId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Like added succesfully',
    data: result,
  })
})

export const UserFollowControllers = {
  followUser,
  getFollowers,
  getFollowees,
}
