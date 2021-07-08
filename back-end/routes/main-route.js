import express from 'express';
const mainRouter = express.Router();
import {getProduct, getProductById} from '../controllers/main-controller.js'

mainRouter.get('/product',getProduct);
mainRouter.get('/product/:id', getProductById);

export default mainRouter;