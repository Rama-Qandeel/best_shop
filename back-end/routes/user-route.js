import express from 'express';
const mainRouter = express.Router();
import {createUser} from '../controllers/user-controller.js'

mainRouter.post('/login',createUser);

export default mainRouter;