import express from 'express';
const mainRouter = express.Router();
import {protect, admin} from '../middlewares/auth.js'
import {getProduct, getProductById, deleteProduct, createProduct, updateProduct} from '../controllers/main-controller.js'

mainRouter.get('/product',getProduct);
mainRouter.get('/product/:id', getProductById);
mainRouter.delete('/product/:id', protect, admin, deleteProduct);
mainRouter.post('/product', protect, admin, createProduct);
mainRouter.put('/product/:id', protect, admin, updateProduct);




export default mainRouter;