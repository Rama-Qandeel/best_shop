import express from 'express';
const mainRouter = express.Router();
import {protect} from '../middlewares/auth.js'
import {createUser, geteUser, registerUser, updateUserProfile} from '../controllers/user-controller.js'

mainRouter.post('/login',createUser);
mainRouter.get('/user/:id',protect,geteUser);
mainRouter.put('/profile',protect,updateUserProfile);
mainRouter.post('/register',registerUser);


export default mainRouter;