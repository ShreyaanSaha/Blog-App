import express from 'express';
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config();

connectDB();

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});