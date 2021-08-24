import express from 'express';
const mainRouter = express.Router();
import {protect} from '../middlewares/auth.js'
import {addOrderItems} from '../controllers/order-controller.js'

mainRouter.post('/order',protect,addOrderItems);


export default mainRouter;