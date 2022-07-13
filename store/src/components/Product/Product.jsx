import "./Product.css";
import ok from './V.png'
import React, { useState } from "react";

function Product(props) {

  // const  [cartItems, setItemToCart()] = useState<


  const [clicked, setClicked] = useState(true);

  function clickHendler(className) {
    clicked ? setClicked(false) : setClicked(true);
    console.log("clicked = " + clicked);
  }

  

  return (
    <div className="product-container">
      <div className="img-coantainer">
        <img className="product-img" src={props.img} />{" "}
      </div>
      <div className="product-name">{props.name}</div>
      <div className="product-discription">{props.discription}</div>
      <div className="purchase-container">
        <div className="price-container">
          {clicked ? (
            <h1 className="product-price">{props.price}</h1>
          ) : (
            <img className="checked-img"src={ok}/>
          )}
        </div>
        <div className="button-container">
        {clicked ? (
           <button className="btn-add" type="button" onClick={clickHendler}>
            הוסף להזמנה
          </button>
          ) : (
            <button className="btn-add" type="button" onClick={clickHendler}>
            הסר מההזמנה
          </button>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Product;
