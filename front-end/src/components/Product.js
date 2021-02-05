import React from "react";
import { Card } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <div>
      <Card className='my-3 p-3 rounded' border="primary">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </a>
     
      <Card.Body>
      <a href={`/product/${product._id}`}>
          <Card.Title as="div">
              <strong>{product.name}</strong>
              </Card.Title>
        </a>
        <Card.Text as="div">
{/* <div className="my-3">
{product.rating} from {product.numReviews} reviews
</div> */}
<Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">

{product.price} 
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
  );
};

export default Product;