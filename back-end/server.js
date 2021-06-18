import express from 'express';
import mainRouter from './routes/main-route.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import db from './db.js'
// const db = require('./db');
const app = express();

app.use(cors()); 
app.use(express.json());
app.use(mainRouter);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
