import express from 'express'
import {config} from 'dotenv'
import connectDB from './config/db.js'
import authroutes from './routes/auth.route.js'
import productRoute from './routes/product.route.js'
import fileUpload from 'express-fileupload'
import cookieParser from 'cookie-parser'
import cors from 'cors'
config()
const {PORT , MONGO_URI} = process.env
const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    Credential:true,
}))
app.use(cookieParser())
app.use(express.json())
app.use(fileUpload())

app.use('/auth/user', authroutes)
app.use('/product', productRoute)


app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    connectDB(MONGO_URI)
    
})













