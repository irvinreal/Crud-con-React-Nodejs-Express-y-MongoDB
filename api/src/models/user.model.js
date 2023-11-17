import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true
  }
})

export default mongoose.model('User', userSchema)
