import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);

  // for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPages, setItemsPerPage] = useState(10);


  const [cart, setCart] = useState([]);
  // const [showAll, setShowAll] = useState(true);

  // pagination

  const { totalProducts } = useLoaderData();
  
  const totalPages = Math.ceil(totalProducts / itemsPerPages);

  const pageNumber = [...Array(totalPages).keys()];

  // pagination  end

  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);


   useEffect(()=>{

    async function fetchData() {
      const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPages}`);
      const data = await response.json();
      setProducts(data);
    }

    fetchData();
    


   },[currentPage, itemsPerPages])





  useEffect(() => {
    const storedCart = getShoppingCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct =
        products && products.find((product) => product._id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }

      setCart(saveCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product._id);
  };

  // const showAllData = () => {
  //   setShowAll(false);
  // };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };




  // for pagination 

  const options = [5,10, 9,20];

  const handleSelectChange=(event)=>{
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0)
  }


  return (
    <>
      <div className="container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="card__container">
          <Cart cart={cart} handleClearCart={handleClearCart}>
            <Link to="/orders" className="btn">
              <button className="btn-checkout">Review Order</button>
            </Link>
          </Cart>
        </div>
        {/* {showAll && (
        <div onClick={showAllData} className="btn-container">
          <button className="btn-more">SEE MORE</button>
        </div>
      )} */}
      </div>

      {/* pagination */}

      <div className="pagination">
        
        <p>current page: {currentPage} and items per page : {itemsPerPages}</p>
        
        {
        
        pageNumber.map(number=> <button className={currentPage === number ? 'selected': ''} onClick={()=>setCurrentPage(number)}  key={number}>{number}</button>)
        
        
        }

        <select value={itemsPerPages} onChange={handleSelectChange}>

          {
            options.map(option=>(<option key={option} value={option}>
              {option}
            </option>))
          }

        </select>
      
      
      
      </div>
    </>
  );
};

export default Shop;
