import React from "react";
import "./PopUp.css";

function Popup(props) {
  return props.trigger ? (
    ""
  ) : (
    <div className="popup">
      <div className="inner-popup">
        <h1 className="my-cart">
            ההזמנה שלי
        </h1>
        <button
          className="close-button"
          onClick={() => props.setTrigger(false)}>
          חזור להזמנה
        </button>
        <button
          className="toCart-button"
          onClick={() => props.setTrigger(false)}>
           המשך לתשלום 
        </button>


        {props.children}
      </div>
    </div>
  );
}

export default Popup;
