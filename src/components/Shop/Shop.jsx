
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [showAll, setShowAll] = useState(true)

    useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart)
    }

    const showAllData =()=>{
       setShowAll(false)
    }

    return (
        <div className='container'>
            <div className='product-container'>
               {
                products.slice(0, showAll? 6 : products.length).map(product=> <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
               }

            </div>
            <div className='card__container'>
                <h2>Order Summery </h2>
                <p>Selected Items : {cart.length}</p>

            </div>
          {
            showAll &&  <div  onClick={showAllData} className='btn-container'>
            <button className='btn-more'>SEE MORE</button>
            </div>
          }
        </div>
    );
};

export default Shop;