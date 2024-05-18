import express from 'express'
import { PostControllers } from './post.controller'

const router = express.Router()

router.post('/', PostControllers.createPost)
router.get('/', PostControllers.getPosts)
router.post('/:postId/like', PostControllers.likePost)

export const PostRoutes = router
