import app from './app.js'
import { connectDB } from './db.js'

connectDB()

const PORT = 4559

app.listen(PORT)
console.log('server on port', PORT)
