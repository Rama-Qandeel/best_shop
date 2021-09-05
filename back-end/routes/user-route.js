import express from 'express';
const mainRouter = express.Router();
import {protect, admin} from '../middlewares/auth.js'
import {createUser, geteUser, registerUser, updateUserProfile, getUsers, deleteUser} from '../controllers/user-controller.js'

mainRouter.post('/login', createUser);
mainRouter.get('/user/:id', protect, geteUser);
mainRouter.put('/profile', protect, updateUserProfile);
mainRouter.post('/register', registerUser);
mainRouter.get('/users', protect, admin, getUsers);
mainRouter.delete('/user/:id', protect, admin, deleteUser);



export default mainRouter;