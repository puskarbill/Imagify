import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config.js/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'


const PORT = process.env.PORT || 4000
const app = express()
// app.use(express.json());
app.use(express.json()) // all the request will be passed using json method
app.use(cors()) // this is middle ware
await connectDB()
// router for user login signup
app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)

app.get('/', (req,res)=> res.send("API Working")) // when we hit this '/' api will send api is working
app.listen(PORT ,()=>console.log('server running on the port'+PORT))
export default app;