import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
// import Products from '../products'
import Product from "../components/Product"
import { listProducts } from '../action/productAction'
const HomeScreen = () => {
 const dispatch = useDispatch()
 const productList= useSelector(state => state.productList)
 const { loading, error, products } = productList

 useEffect(() => {
 dispatch(listProducts())
}, [dispatch])

    return (
        <>
       <h1>latest</h1>
       {loading? <h2>Loading...</h2> : error ? <h3>{error}</h3>:(
        <Row>
           {products.map(product=>{
            return   <Col key={product._id} sm={20} md={6} lg={4} xl={2}>
            <Product product={product}/>
               </Col>
           })}
           </Row> 
       )}   
        </>
    )
}

export default HomeScreen

