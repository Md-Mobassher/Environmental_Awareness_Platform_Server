import { Router } from 'express'
import { UserRoutes } from '../modules/users/user.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },

  // {
  //   path: '/admins',
  //   route: AdminRoutes,
  // },

  // {
  //   path: '/auth',
  //   route: AuthRoutes,
  // },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router