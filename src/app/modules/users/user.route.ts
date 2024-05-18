import express, { NextFunction, Request, Response } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from './user.validation'
import { UserControllers } from './user.controller'
import { upload } from '../../utils/sendImageToCloudinary'
import { USER_ROLE } from './user.constant'
import auth from '../../middlewares/auth'

const router = express.Router()

router.post(
  '/register',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    next()
  },
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createUser,
)

router.patch(
  '/update',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.user),
  validateRequest(UserValidation.updateUserValidationSchema),
  UserControllers.updateUser,
)

router.get(
  '/me',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.user),
  UserControllers.getMe,
)
export const UserRoutes = router
