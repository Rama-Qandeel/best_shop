import asyncHandler from 'express-async-handler'
import Product from '../models/product.js'


const getProduct = (asyncHandler(async(req,res) => {
    const products = await Product.find({})
    res.json(products);
}))


const getProductById = (asyncHandler(async(req,res) => {
    const products = await Product.findById(req.params.id)
    if(products){
      res.json(products);
    } else {
      res.status(404)
      throw new Error ('Product Not Found')
    }
}))

const deleteProduct = (asyncHandler(async(req,res) => {
const product = await Product.findById(req.params.id)
if (product) {
 await product.remove ();
  res.json({message: "Product removed"})
}else {
  res.status(404)
  throw new Error ("Product not found")
}
}))

export {
    getProduct,
    getProductById,
    deleteProduct,
}
