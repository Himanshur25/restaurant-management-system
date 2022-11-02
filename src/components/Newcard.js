// import { NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useContext} from 'react';
import { CartContext } from './cart';



function Newcard({id,name,Price,Image}) {
  const {cartItems, setCartItems} =useContext(CartContext);
  const addToCart = () => {
    const item = cartItems.find(item => item.id===id)
    if(item) {
      setCartItems(cartItems.map(item => {
        if(item.id===id) {
          item.quantity++;
        }
        return item
      }))
    } else {
      setCartItems([...cartItems, {id,name, Price, Image, quantity:1}])
    }
  }
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {/* <Card.Text>
          Margreta Pizza,Cheese Pizza, Onion/Tomato Pizza,Corn Pizza
        </Card.Text> */}
        <Card.Text>
         Price { Price}/-
        </Card.Text>
        <Button variant="primary" onClick={addToCart}>Add to cart</Button>
      </Card.Body>
    </Card>

    </>
  );
}

export default Newcard;