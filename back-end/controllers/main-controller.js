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

export {
    getProduct,
    getProductById
}
