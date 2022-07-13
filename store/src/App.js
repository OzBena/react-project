import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product/Product";
import Heading from "./components/Heading/Heading";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact_us from "./pages/Contact_us";
import Order from "./pages/Order";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <App />;
      break;
    case "/Menu":
      component = <Menu />;
      break;
    case "/Order":
      component = <Order />;
      break;
    case "/About":
      component = <About />;
      break;
    case "/Contact_us":
      component = <Contact_us />;
      break;
  }
  return (
    <>
      <Heading />
      <div className="comp-container">
       {component}
      </div>
    
    </>
  );
}
export default App;
