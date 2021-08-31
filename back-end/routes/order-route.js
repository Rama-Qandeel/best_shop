import express from 'express';
const mainRouter = express.Router();
import {protect} from '../middlewares/auth.js'
import {addOrderItems, getOrderById, updateOrderToPaid, updateOrderToDelivered, getMyOrders} from '../controllers/order-controller.js'

mainRouter.post('/order', protect, addOrderItems);
mainRouter.get('/order/:id', protect, getOrderById);
mainRouter.put('/order/:id/pay', protect, updateOrderToPaid);
mainRouter.put('/order/:id/deliver', protect, updateOrderToDelivered);
mainRouter.get('/myorders', protect, getMyOrders);


export default mainRouter;