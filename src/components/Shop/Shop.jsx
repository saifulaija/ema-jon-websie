
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    },[])

    return (
        <div className='container'>
            <div className='product-container'>
               {
                products.map(product=> <Product product={product} key={product.id}></Product>)
               }

            </div>
            <div className='card__container'>
                <h2>card </h2>

            </div>
        </div>
    );
};

export default Shop;