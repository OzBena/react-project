import "./order.css";
import '../components/PopUp/PopUp'
import Popup from "../components/PopUp/PopUp";
import React, { useState } from "react";
import Product from "../components/Product/Product";
/*------------------------------------------------*/
import adamame from "./Menu_img/adamame.jpg";
import fish_n_Chips from "./Menu_img/Fish-and-Chips.jpg";
import chiken_wings from "./Menu_img/chiken_wings.jpg";
import mac_n_cheese from "./Menu_img/mac-cheese-balls.jpg";
import onion_rings from "./Menu_img/onion_rings.jpg";
/*------------------------------------------------*/
import fenomeno from "./Menu_img/fenomeno.webp";
import goat from "./Menu_img/goat.jpg";
import Crteva from "./Menu_img/Crteva.jpg";
import zidan from "./Menu_img/burger.avif";
import dutch from "./Menu_img/dutch.jpg";
/*------------------------------------------------*/
import chedderC from "./Menu_img/chedderC.jpg";
import goatC from "./Menu_img/goatC.jpg";
import goudaC from "./Menu_img/goudaC.jpg";
import roquefortC from "./Menu_img/roquefortC.jpg";
import bacon from "./Menu_img/bacon.jpg";
import goose from "./Menu_img/goose.png";
import ribEye from "./Menu_img/ribEye.jpg";
import egg from "./Menu_img/egg.jpg";
import garlic from "./Menu_img/garlic.jpg";
import maple from "./Menu_img/Maple.webp";
import PB from "./Menu_img/PB.webp";
import mushroom from "./Menu_img/Mushrooms.jpg";
/*------------------------------------------------*/

export default function Order() {
  let i = 0;
  let Products_img = [
    /*0*/ adamame,
    /*1*/ fish_n_Chips,
    /*2*/ chiken_wings,
    /*3*/ mac_n_cheese,
    /*4*/ onion_rings,
    /*5*/ zidan,
    /*6*/ dutch,
    /*7*/ fenomeno,
    /*8*/ goat,
    /*9*/ Crteva,
    /*10*/ bacon,
    /*11*/ goose,
    /*12*/ ribEye,
    /*13*/ chedderC,
    /*14*/ goatC,
    /*15*/ goudaC,
    /*16*/ roquefortC,
    /*17*/ egg,
    /*18*/ garlic,
    /*19*/ maple,
    /*20*/ PB,
    /*21*/ mushroom,
  ];
  let Products_names = [
    /*0*/ "אדממה",
    /*1*/ "פיש אנד צ'יפס",
    /*2*/ "כנפיים",
    /*3*/ "מק אנד צ'יז",
    /*4*/ "טבעות בצל",
    /*5*/ "א לה זידאן",
    /*6*/ "יוהאן המעופף",
    /*7*/ 'רונאלדו "פנומנו"',
    /*8*/ "G.O.A.T",
    /*9*/ "CR טבע",
    /*10*/ "בייקון",
    /*11*/ "חזה אווז",
    /*12*/ "מניפת אנטריקוט",
    /*13*/ "צ'דר",
    /*14*/ "גבינת עזים",
    /*15*/ "גאודה",
    /*16*/ "רוקפור",
    /*17*/ "ביצת עין",
    /*18*/ "שום קונפי",
    /*19*/ "מייפל",
    /*20*/ "חמאת בוטנים",
    /*21*/ "פטריות",
  ];
  let Products_discription = [
    /*0*/ "פולי סויה מבושלים עם מלח ולימון",
    /*1*/ "נתחי דג הייק מטוגנים בטמפורה, מוגשים עם צ'יפס ואיולי שום",
    /*2*/ "כנפיים מוקפצות בדבש וצ'ילי בליווי רוטב ראנץ'",
    /*3*/ "כדורי מק אנד צ'יז עם גבינת צ'דר עטופים בפירורי לחם בטיגון עמוק",
    /*4*/ "טבעות בצל בטמפורה בליווי רוטב ראנץ'",
    /*5*/ "המבורגר בתוספת גבינה כחולה, ארגולה ובייקון",
    /**/ "המבורגר בתוספת גאודה, בייקון ובצלים מקורמלים",
    /*7*/ "המבורגר בתוספת אננס, חזה אווז וצ'דר",
    /*8*/ "המבורגר בתוספת אסאדו מפורק, גאודה ורוטב צ'ימיצורי",
    /*9*/ "המבורגר צמחוני בתוספת פיטריות וביצת עין ",
    /*10*/ "100 גרם בייקון",
    /*11*/ "100 גרם חזה אווז",
    /*12*/ " 100 גרם אנטריקוט",
    /*13*/ "גבינת צ'דר",
    /*14*/ "גבינת עזים",
    /*15*/ "גבינת גאודה",
    /*16*/ "גבינת רוקפור",
    /*17*/ "ביצת עין/הפוכה",
    /*18*/ "שום קונפי",
    /*19*/ "סירופ מייפל",
    /*20*/ "חמאת בוטנים",
    /*21*/ "פטריות",
  ];
  let Products_price = [
    /*0*/ '25 ש"ח',
    /*1*/ '30 ש"ח',
    /*2*/ '30 ש"ח',
    /*3*/ '20 ש"ח',
    /*4*/ '30 ש"ח',
    /*5*/ '63 ש"ח',
    /*6*/ '65 ש"ח',
    /*7*/ '65 ש"ח',
    /*8*/ '67 ש"ח',
    /*9*/ '55 ש"ח',
    /*10*/ '11 ש"ח',
    /*11*/ '11 ש"ח',
    /*12*/ '8 ש"ח',
    /*13*/ '8 ש"ח',
    /*14*/ '8 ש"ח',
    /*15*/ '8 ש"ח',
    /*16*/ '6 ש"ח',
    /*17*/ '6 ש"ח',
    /*18*/ '6 ש"ח',
    /*19*/ '6 ש"ח',
    /*20*/ '6 ש"ח',
    /*21*/ '6 ש"ח',
  ];

  const [toCart, goToCart] = useState(true);

  function cartHendler(className) {
    toCart ? goToCart(false) : goToCart(true);
    console.log("toCart = " + toCart);
  }

  return (
    <div>
      <div>
        <div className="popup">
          <Popup trigger={toCart} setTrigger={cartHendler}>

          </Popup>
        </div>
        <div className="menu-container">
          <div className="subject-container">
            <h1 className="subject-name">עולים לחימום </h1>
            <div className="Products-container">
              <Product
                className="menu-img"
                img={Products_img[0]}
                name={Products_names[0]}
                discription={Products_discription[0]}
                price={Products_price[0]}
              />
              <Product
                className="menu-img"
                img={Products_img[1]}
                name={Products_names[1]}
                discription={Products_discription[1]}
                price={Products_price[1]}
              />
              <Product
                className="menu-img"
                img={Products_img[2]}
                name={Products_names[2]}
                discription={Products_discription[2]}
                price={Products_price[2]}
              />
              <Product
                className="menu-img"
                img={Products_img[3]}
                name={Products_names[3]}
                discription={Products_discription[3]}
                price={Products_price[3]}
              />
              <Product
                className="menu-img"
                img={Products_img[4]}
                name={Products_names[4]}
                discription={Products_discription[4]}
                price={Products_price[4]}
              />
            </div>
          </div>
          <div className="subject-container">
            <h1 className="subject-name">נבחרת החלומות</h1>
            <div className="Products-container">
              <Product
                img={Products_img[5]}
                name={Products_names[5]}
                discription={Products_discription[5]}
                price={Products_price[5]}
              />
              <Product
                img={Products_img[6]}
                name={Products_names[6]}
                discription={Products_discription[6]}
                price={Products_price[6]}
              />
              <Product
                img={Products_img[7]}
                name={Products_names[7]}
                discription={Products_discription[7]}
                price={Products_price[7]}
              />
              <Product
                img={Products_img[8]}
                name={Products_names[8]}
                discription={Products_discription[8]}
                price={Products_price[8]}
              />
              <Product
                img={Products_img[9]}
                name={Products_names[9]}
                discription={Products_discription[9]}
                price={Products_price[9]}
              />
            </div>
          </div>
          <div className="subject-container">
            <h1 className="subject-name">על הספסל</h1>

            <div className="Products-container">
              <Product
                img={Products_img[10]}
                name={Products_names[10]}
                discription={Products_discription[10]}
                price={Products_price[10]}
              />
              <Product
                img={Products_img[11]}
                name={Products_names[11]}
                discription={Products_discription[11]}
                price={Products_price[11]}
              />
              <Product
                img={Products_img[12]}
                name={Products_names[12]}
                discription={Products_discription[12]}
                price={Products_price[12]}
              />
              <Product
                img={Products_img[13]}
                name={Products_names[13]}
                discription={Products_discription[13]}
                price={Products_price[13]}
              />
              <Product
                img={Products_img[14]}
                name={Products_names[14]}
                discription={Products_discription[14]}
                price={Products_price[14]}
              />
              <Product
                img={Products_img[15]}
                name={Products_names[15]}
                discription={Products_discription[15]}
                price={Products_price[15]}
              />
              <Product
                img={Products_img[16]}
                name={Products_names[16]}
                discription={Products_discription[16]}
                price={Products_price[16]}
              />
              <Product
                img={Products_img[17]}
                name={Products_names[17]}
                discription={Products_discription[17]}
                price={Products_price[17]}
              />
              <Product
                img={Products_img[18]}
                name={Products_names[18]}
                discription={Products_discription[18]}
                price={Products_price[18]}
              />
              <Product
                img={Products_img[19]}
                name={Products_names[19]}
                discription={Products_discription[19]}
                price={Products_price[19]}
              />
              <Product
                img={Products_img[20]}
                name={Products_names[20]}
                discription={Products_discription[20]}
                price={Products_price[20]}
              />
              <Product
                img={Products_img[21]}
                name={Products_names[21]}
                discription={Products_discription[21]}
                price={Products_price[21]}
              />
            </div>
          </div>
        </div>
        
        </div>
      <button className="btn-to-cart" onClick={cartHendler}>
        צפה בהזמנה
      </button>
    </div>
  );
}
