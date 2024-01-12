import { Router } from 'express'
import {
  deleteUser,
  editUser,
  listOfUsers,
  login,
  register
} from '../controllers/user.controller.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.get('/users', listOfUsers)
router.delete('/delete-user', deleteUser)
router.put('/update-user', editUser)

export default router
