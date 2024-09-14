import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db';
import notFound from './middlewares/not-found';
import errorHandler from './middlewares/error';
import userRoutes from './routes/user.route';
import checkAuth from './middlewares/checkAuth';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use( userRoutes)


app.get('/',checkAuth, (req, res) => {
  res.send('Hello World!');
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on http://localhost:"+ PORT);
});