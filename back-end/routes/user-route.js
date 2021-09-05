import express from 'express';
const mainRouter = express.Router();
import {protect, admin} from '../middlewares/auth.js'
import {createUser, geteUser, registerUser, updateUserProfile, getUsers, deleteUser, getUserById, updateUser} from '../controllers/user-controller.js'

mainRouter.post('/login', createUser);
mainRouter.get('/user/:id', protect, geteUser);
mainRouter.put('/profile', protect, updateUserProfile);
mainRouter.post('/register', registerUser);
mainRouter.get('/users', protect, admin, getUsers);
mainRouter.delete('/user/:id', protect, admin, deleteUser);
mainRouter.get('/user/:id', protect, admin, getUserById);
mainRouter.put('/user/:id', protect, admin, updateUser);


export default mainRouter;