
import './Product.css'
import React from 'react';

const Product = (props) => {
    console.log(props.product);
    const {img, price, seller, ratings, name} = props.product
    return (
        <div className='product'>
           <img src={img} alt="" />
          <div className='product-info'>
          <h6>{name}</h6>
           <p>Price :$ {price}</p>
           <p>Manufacturer : {seller}</p>
           <p>Ratings : {ratings} STAR</p>
          </div>
          <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;