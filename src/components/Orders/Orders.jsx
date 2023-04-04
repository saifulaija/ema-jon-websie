import React from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {

  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);
  const handleRemoveCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  
  const handleClearCart =()=>{
    setCart([])
    deleteShoppingCart()
  }


  return (
    <div className="container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product.id}
            handleRemoveCart={handleRemoveCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="card__container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
            <Link to='/checkout' className="btn">
                <button className="btn-checkout">Checkout Order</button>
            </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
