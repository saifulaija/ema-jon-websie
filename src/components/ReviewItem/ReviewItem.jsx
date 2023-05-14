import React from "react";
import "./ReviewItem.css";
import { FaShoppingCart,FaCut } from 'react-icons/fa';
import { FcAddressBook} from "react-icons/fc";

const reviewItem = ({ product,handleRemoveCart }) => {
  const { _id, img, price, quantity, name } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="product-details">
        <p className="product-title">{name}</p>
        <p className="orange">
          Product Price <span className="orange-text">$ {price}</span>{" "}
        </p>
        <p>Product Quantity:<span className="orange-text">{quantity}</span> </p>
      </div>
      <button onClick={()=>handleRemoveCart(_id)} className="btn-delete"><FaCut className="delete-icon"/></button>
    </div>
  );
};

export default reviewItem;
