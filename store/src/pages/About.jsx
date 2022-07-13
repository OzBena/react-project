import Popup from "../components/PopUp/PopUp";
import React, { useState } from "react";

// export default function About() {
//   // const [clicked, setClicked] = useState(false);

//   // function clickHendler(className) {
//   //   clicked ? setClicked(false) : setClicked(true);
//   //   console.log("clicked = " + clicked);
//   // }
//   return <h1>contact_us</h1>;
// }

export default function About() {
  const [clicked, setClicked] = useState(false);
  function clickHendler(className) {
    clicked ? setClicked(false) : setClicked(true);
    console.log("clicked = " + clicked);
  }

  return (
    <div className="button-container">
      {clicked ? (
        <div className="popup">
          <Popup trigger={clicked} setTrigger={setClicked}>

          </Popup>
        </div>
      ) : (
        <button className="test" onClick={clickHendler}>
          test
        </button>
      )}
    </div>
  );

  // ;
}
