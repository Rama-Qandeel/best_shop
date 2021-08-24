import express from 'express';
import mainRouter from './routes/main-route.js';
import userRouter from './routes/user-route.js';
import orderRouter from './routes/order-route.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middlewares/404.js'
dotenv.config();
import db from './db.js'
db()
const app = express();

app.use(cors()); 
app.use(express.json());
app.use(mainRouter);
app.use(userRouter);
app.use (orderRouter)

app.use(notFound)
app.use(errorHandler)

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
