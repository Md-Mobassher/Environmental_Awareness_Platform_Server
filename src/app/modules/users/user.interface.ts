/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose'
import { USER_ROLE } from './user.constant'

export interface TUser {
  _id?: Types.ObjectId
  name: string
  email: string
  password: string
  contactNo: string
  gender: 'male' | 'female' | 'other'
  dateOfBirth?: Date
  address: string
  profileImg?: string
  status: 'in-progress' | 'blocked'
  role: 'superAdmin' | 'admin' | 'user'
  isDeleted: boolean
  interests: string[]
}

export interface UserModel extends Model<TUser> {
  // instance method for checking if the user exists or not
  isUserExists(email: string): Promise<TUser | null>

  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>
}

export type TUserRole = keyof typeof USER_ROLE
