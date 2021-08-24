import express from 'express';
const mainRouter = express.Router();
import {protect} from '../middlewares/auth.js'
import {addOrderItems, getOrderById} from '../controllers/order-controller.js'

mainRouter.post('/order',protect,addOrderItems);
mainRouter.get('/order/:id',getOrderById);


export default mainRouter;