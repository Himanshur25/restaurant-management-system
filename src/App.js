import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home Page/Home";
import Menu from "./components/Menu/Menu"
 import  {Login } from "./components/User/login";
 import { Register } from "./components/User/register";
 import './App.css';
import Checkout from "./components/cart/Checkout";
import Payment from "./components/Payment/Payment";
import Contactus from "./components/Contactus/Contactus";
import Aboutus from "./components/Aboutus/Aboutus";

 function App() {
  return (
    <div className="background">
    <BrowserRouter>          
          <div className="container"></div>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Home" element={<Menu/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Checkout/>} />
              <Route path="/payment" element={<Payment/>}/>
              <Route path="/aboutus" element={<Aboutus/>} />
              <Route path="/contactus" element={<Contactus/>} />
              
            
            </Routes>
          
        </BrowserRouter>
        
        </div>

  );
}

export default App;