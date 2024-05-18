import { IUserFollow } from './follow.interface'
import { UserFollow } from './follow.model'

export const followUser = async (data: IUserFollow): Promise<IUserFollow> => {
  const follow = new UserFollow(data)
  return await follow.save()
}

export const getFollowers = async (userId: string): Promise<IUserFollow[]> => {
  return await UserFollow.find({ followeeId: userId }).populate('followerId')
}

export const getFollowees = async (userId: string): Promise<IUserFollow[]> => {
  return await UserFollow.find({ followerId: userId }).populate('followeeId')
}

export const FollowServices = {
  followUser,
  getFollowers,
  getFollowees,
}
