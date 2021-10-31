import express from 'express';
const mainRouter = express.Router();
import {protect, admin} from '../middlewares/auth.js'
import {addOrderItems, getOrderById, updateOrderToPaid, updateOrderToDelivered, getMyOrders, getAllOrders} from '../controllers/order-controller.js'

mainRouter.post('/order', protect, addOrderItems);
mainRouter.get('/order/:id', protect, getOrderById);
mainRouter.put('/order/:id/pay', protect, updateOrderToPaid);
mainRouter.put('/order/:id/deliver', protect, updateOrderToDelivered);
mainRouter.get('/myorders', protect, getMyOrders);
mainRouter.get('/orders', protect, admin, getAllOrders);


export default mainRouter;