import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import "./Checkout.css"
import image from "./../images/food.webp"

export default function Checkout() {
  const [data, setData] = useState([]);
  const getData = () => {
    const url = "http://localhost:5000/api/cart";
    const params = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(url, params)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };
  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <div style={{ height: "100%",backgroundImage:`url(${image})`,backgroundSize:"cover",fontFamily:' "Merriweather", serif'}}>
        <div className="checkout-container">
          <h1 className="h1" >
           <div> Your Food Cart</div>
          </h1>
          <Link className="btn btn-light mx-1" to="/Home" role="button">
            Back
          </Link>
          <h3 className="h3">
            <i>Checkout your favourite food Added: </i>
          </h3>
          <div className="cart-container">
            
           {data.map((f) => {
        return (
          <>
          <div className="fooditem">
            <div className="foodname">{f.food_name}</div>
            <div>{f.food_price}</div>
            <div>{f.quantity}</div>
            <div>{f.food_price*f.quantity}</div>
          </div>
           
      </>

        );
      })}

      <div className="coupon">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Have a coupon code"
          aria-label=""
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-primary" id="button-addon2">
          Apply
        </Button>
      </InputGroup>
      </div>
          </div>
        </div>
        
        <Link
          className="btn btn-primary mx-auto"
          style={{ position: "fixed", left: "650px", top: "740px" }}to="/payment">Payment</Link>
        
      </div>
    </>
  );
}
