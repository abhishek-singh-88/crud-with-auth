import express from 'express'
import { login, logout, profile, signup } from '../controllers/auth.controller.js'
import validateUser from '../middleware/token.verify.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/profile', validateUser, profile)
router.post('/logout', logout)

export default router


