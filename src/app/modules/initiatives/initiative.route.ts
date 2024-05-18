import express from 'express'
import { InitiativeControllers } from './initiative.controller'

const router = express.Router()

router.get('/', InitiativeControllers.getAllInitiatives)
router.post('/', InitiativeControllers.createInitiative)
router.get('/:id', InitiativeControllers.getInitiativeById)
router.put('/:id', InitiativeControllers.updateInitiative)
router.delete('/:id', InitiativeControllers.deleteInitiative)
router.post('/:id/join', InitiativeControllers.joinInitiative)

export const InitiativeRoutes = router
