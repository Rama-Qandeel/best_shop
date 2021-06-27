import asyncHandler from 'express-async-handler'
import express from 'express';
const mainRouter = express.Router();
import Product from '../models/product.js'

mainRouter.get('/product', asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products);
}));

mainRouter.get('/product/:id', asyncHandler(async (req, res) => {
  const products = await Product.findById(req.params.id)
  if(products){
    res.json(products);
  } else {
    res.status(404)
    throw new Error ('Product Not Found')
  }
}));
export default mainRouter;