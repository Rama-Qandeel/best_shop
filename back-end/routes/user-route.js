import express from 'express';
const mainRouter = express.Router();
import {protect} from '../middlewares/auth.js'
import {createUser, geteUser} from '../controllers/user-controller.js'

mainRouter.post('/login',createUser);
mainRouter.get('/profile',protect,geteUser);


export default mainRouter;