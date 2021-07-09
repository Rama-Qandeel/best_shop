import express from 'express';
const mainRouter = express.Router();
import {protect} from '../middlewares/auth.js'
import {createUser, geteUser, registerUser} from '../controllers/user-controller.js'

mainRouter.post('/login',createUser);
mainRouter.get('/profile',protect,geteUser);
mainRouter.post('/register',registerUser);


export default mainRouter;