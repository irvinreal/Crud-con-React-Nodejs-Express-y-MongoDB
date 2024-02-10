import mongoose from 'mongoose';

const { MONGODB_URL } = process.env;

// const connectionParams = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// };

export const connectDB = async () => {
  console.log('Connecting to DB...');
  try {
    // 1. Create a new client
    // 2. Connect the client
    // 3. Create a DB
    // 4. Create a Collection

    await mongoose.connect(MONGODB_URL);

    console.log('>>> DB is connected!');
  } catch (error) {
    console.log(`DB Connection Failed!, ${error}`);
    process.exit(1);
  }
};
