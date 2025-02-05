import express from 'express'
import { login, logout, profile, signup, uploadImg } from '../controllers/auth.controller.js'
import validateUser from '../middleware/token.verify.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/profile', validateUser, profile)
router.post('/logout', logout)
router.patch('/upload-img/:_id',validateUser, uploadImg)


export default router


