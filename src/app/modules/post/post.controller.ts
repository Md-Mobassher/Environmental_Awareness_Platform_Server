import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import { PostServices } from './post.service'
import sendResponse from '../../utils/sendResponse'

const createPost = catchAsync(async (req, res) => {
  const result = await PostServices.createPost(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post created succesfully!',
    data: result,
  })
})

const getPosts = catchAsync(async (req, res) => {
  const result = await PostServices.getPosts(req.query)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Posts retrived succesfully',
    data: result,
  })
})

const likePost = catchAsync(async (req, res) => {
  const { postId } = req.query
  const { _id: userId } = req.user
  const result = await PostServices.likePost(postId as string, userId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Like added succesfully',
    data: result,
  })
})

export const PostControllers = {
  createPost,
  getPosts,
  likePost,
}
