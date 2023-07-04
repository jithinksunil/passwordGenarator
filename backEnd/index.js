import express from 'express'
import mongodb from './config/mongoose.js'
import dotenv from 'dotenv'
import cors from 'cors'
import checkToken from './middleware/checkToken.js'
import UserRouter from './routes/userRoutes.js'
import authRouter from './routes/authRouter.js'
const app=express()
dotenv.config()
mongodb()
app.use(cors({
    origin: process.env.CORS_LINKS?.split(','),
    methods: [
        "GET",
        "POST",
        "DELETE",
        "PUT",
        "PATCH"
    ]
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/auth',authRouter)
app.use('/',checkToken,UserRouter)

app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`);
})
