import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.use((err: Error, req: Request, res : Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
    connectDB();
    console.log("Server is running on http://localhost:"+ process.env.PORT);
});