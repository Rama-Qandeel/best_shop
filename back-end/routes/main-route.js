import express from 'express';
const mainRouter = express.Router();
import {protect, admin} from '../middlewares/auth.js'
import {getProduct, getProductById, deleteProduct} from '../controllers/main-controller.js'

mainRouter.get('/product',getProduct);
mainRouter.get('/product/:id', getProductById);
mainRouter.delete('/product/:id', deleteProduct);

export default mainRouter;