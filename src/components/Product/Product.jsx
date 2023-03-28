
import './Product.css'
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FcAddressBook } from "react-icons/fc";


const Product = (props) => {
    
    const {img, price, seller, ratings, name,id} = props.product;
    const handleAddToCart = props.handleAddToCart;

     
    return (
        <div className='product'>
           <img src={img? img : 'not found'} alt="not found" />
          <div className='product-info'>
          <h6>{name}</h6>
           <p>Price :$ {price}</p>
           <p>Manufacturer : {seller}</p>
           <p>Ratings : {ratings} STAR</p>
          </div>
          <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add to Cart  <FaShoppingCart/> </button>
        </div>
    );
};

export default Product;