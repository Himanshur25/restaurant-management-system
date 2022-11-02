import {useContext} from 'react';
import { CartContext } from './cart';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import payment from './payment'



export default function Checkout() {
    const {cartItems,setCartItems} = useContext(CartContext);
    console.log(cartItems)
  //   function Newcard({id,name,Price,Image}) {
  //     const {cartItems, setCartItems} =useContext(CartContext);
  //     const plus = () => {
  //   const item = cartItems.find(item => item.id===id)
  //   if(item) {
  //     setCartItems(cartItems.map(item => {
  //       if(item.id===id) {
  //         item.quantity++;
  //       }
  //       return item
  //     }))
  //   } else {
  //     setCartItems([...cartItems, {id,name, Price, Image, quantity:1}])
  //   }
  // }

  const addQuantity = (id) => {
    const newCartList = cartItems.filter((item)=> {
      if(id === item.id) {
        return {
          ...item,
          quantity: item.quantity++,
        }
      }
      return item;
    })
    setCartItems(newCartList);
  }

  const removeQuantity = (id) => {
    const newCartList = cartItems.filter((item)=> {
      if(id === item.id) {
        if(item.quantity===1)
          return;
        return {
          ...item,
          quantity: item.quantity--,
        }
      }
      return item;
    })
    setCartItems(newCartList);
  }
  
  return (
    <>
    <div style={{height:"100%"}}>
    <div className='checkout-container'>
         <h1 style={{textAlign:"center",color:"black",background:"yellow"}}>Your Food Cart<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">

  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg></h1>
      <h3 style={{textAlign:"center",display:"flex",justifyContent:"center",marginTop:"94px"}}><i>Checkout your favourite food Added: </i></h3>
        <div className='cart-container' style={{width: "80%",
    margin: "0 auto"}}>
      {
      cartItems.map(({id, name, Price, quantity}) => {
       return( 
       <div className='cart-item'style={{    width: "100%",
        display: "flex",
        justifyContent: "space-between"}}>
          
        <div className='cart-column' style={{width:"200px"}} >
        {name}
        <button type="button" class="btn btn-primary btn-sm" onClick={()=>addQuantity(id)} >+</button>
        <button type="button" class="btn btn-secondary btn-sm"onClick={()=>removeQuantity(id)}>-</button>
        </div>
        <div className='cart-column'>
            {Price}
        </div>
        <div className='cart-column'>
            {quantity}
        </div>
        <div className='cart-column'>
            {Price*quantity}
        </div>
        
       </div>
      
       )

      })
    }
   
    </div>
    
    </div>
    
    <Link className="btn btn-primary mx-auto" style={{position:"fixed",left:"700px",top:"750px"}} to='/payment'>Payment</Link>
    <hr/>
    </div>
    </>
    
  );
      }
    