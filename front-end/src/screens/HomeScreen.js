import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Products from '../products'
import Product from "../components/Product"
const HomeScreen = () => {
    return (
        <>
       <h1>latest</h1>   
       <Row>
           {Products.map(product=>{
            return   <Col key={product._id} sm={20} md={6} lg={4} xl={2}>
            <Product product={product}/>
               </Col>
           })}
           </Row>  
        </>
    )
}

export default HomeScreen

