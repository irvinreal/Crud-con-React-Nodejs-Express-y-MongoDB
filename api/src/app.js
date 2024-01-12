import cors from 'cors'
import { configDotenv } from 'dotenv'
import express from 'express'
import authRoutes from './routes/auth.routes.js'

configDotenv()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', authRoutes)

export default app
