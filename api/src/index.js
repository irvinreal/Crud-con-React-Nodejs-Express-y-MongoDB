import app from './app.js';
import { connectDB } from './db.js';
const { PORT } = process.env;

connectDB();

app.listen(PORT, () => {
  console.log('server on port', PORT);
});
