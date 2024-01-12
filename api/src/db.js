import mongoose from 'mongoose'

const { MONGODB_URL } = process.env

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL)
    console.log('>>> DB is connected!')
  } catch (error) {
    console.log(`DB CONNECTION FAILED!, ${error}`)
    process.exit(1)
  }
}
