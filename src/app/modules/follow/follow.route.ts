import express from 'express'
import { UserFollowControllers } from './follow.controller'

const router = express.Router()

router.post('/', UserFollowControllers.followUser)
router.get('/followers', UserFollowControllers.getFollowers)
router.get('/followees', UserFollowControllers.getFollowees)

export const PostRoutes = router
