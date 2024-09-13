import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db';

// Load environment variables from .env file
dotenv.config();

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
    connectDB();
    console.log("Server is running on http://localhost:"+ process.env.PORT);
});