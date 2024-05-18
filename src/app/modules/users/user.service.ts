/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUser } from './user.interface'
import { User } from './user.model'
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'
import AppError from '../../errors/AppError'
import httpStatus from 'http-status'
import { USER_ROLE } from './user.constant'

const createUserIntoDB = async (file: any, payload: TUser) => {
  if (file) {
    const imageName = `${payload?.name}`
    const path = file?.path
    //send image to cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path)
    payload.profileImg = secure_url as string
  }

  // create a User
  const newUser = await User.create(payload)

  if (!newUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to Create User')
  }

  return newUser
}

const updateUserIntoDB = async (userId: string, payload: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(userId, payload, {
    new: true,
  })
  return result
}

const getMe = async (userEmail: string, role: string) => {
  let result = null
  if (role === USER_ROLE.user) {
    result = await User.findOne({ email: userEmail })
  }
  if (role === USER_ROLE.admin) {
    result = await User.findOne({ email: userEmail })
  }
  if (role === USER_ROLE.superAdmin) {
    result = await User.findOne({ email: userEmail })
  }

  return result
}

export const UserServices = {
  createUserIntoDB,
  updateUserIntoDB,
  getMe,
}
