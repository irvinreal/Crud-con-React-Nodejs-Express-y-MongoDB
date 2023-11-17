import { Router } from 'express'
import { listOfUsers, login, register } from '../controllers/auth.controller.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.get('/users', listOfUsers)

export default router
