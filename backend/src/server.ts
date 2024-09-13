import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db';
import notFound from './middlewares/not-found';
import errorHandler from './middlewares/error';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use((err: Error, req: Request, res : Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on http://localhost:"+ PORT);
});