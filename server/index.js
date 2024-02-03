import express from 'express';
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);