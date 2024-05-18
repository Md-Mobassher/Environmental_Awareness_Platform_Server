import express from 'express'
import { EcoFriendlyActionControllers } from './ecoFriendly.controller'

const router = express.Router()

router.post('/', EcoFriendlyActionControllers.logAction)
router.get('/:userId', EcoFriendlyActionControllers.getUserActions)
router.get('/:userId/impact', EcoFriendlyActionControllers.calculateUserImpact)

export const EcoFriendlyActionRoutes = router
