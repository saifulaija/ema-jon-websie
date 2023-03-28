
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart)
    }

    return (
        <div className='container'>
            <div className='product-container'>
               {
                products.map(product=> <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
               }

            </div>
            <div className='card__container'>
                <h2>Order Summery </h2>
                <p>Selected Items : {cart.length}</p>

            </div>
        </div>
    );
};

export default Shop;