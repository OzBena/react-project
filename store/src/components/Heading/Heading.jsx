import "./Heading.css";
import logo from "./logo.png";

function Heading() {
    return <div className="head-container">
     
     <nav className="nav">
        <a href="./App"> 
        <img className="logo" src={logo}/>
        </a>
        <ul>    
         <li>
            <a href="/Contact_us"> צור קשר</a>
         </li>
          <li>
            <a href="/About"> עלינו</a>
         </li>
         <li>
            <a href="/Order"> הזמנה</a>
        </li>
         <li>
            <a href="/Menu"> תפריט</a>
         </li>

    </ul>
     </nav>
    
    </div>
  

}

export default Heading;
