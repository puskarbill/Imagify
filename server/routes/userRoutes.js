import express from 'express'
import {registerUser,loginUser, userCredits} from '../controllers/userController.js'
import userAuth from '../controllers/middlewares/auth.js'


const userRouter = express.Router()
userRouter.post('/register',registerUser) // creating api end point from here /register  call registerUser
userRouter.post('/login',loginUser)
userRouter.get('/credits',userAuth,userCredits)

export  default userRouter
// localhost:4000/api/user/register
// localhost:4000/api/user/login