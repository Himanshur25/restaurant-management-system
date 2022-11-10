import React from 'react'
import { Link } from "react-router-dom";
import Image from "./../images/foodie.jpeg"
import "./Payment.css"


export default function Payment() {
    
  return (
    <div className='payment'>
    <div>
      <h3 className='message'><b>Happy Ordering </b></h3>
      <h3 className='message2'><b>Just Relax and Enjoy </b></h3>

    </div>
    <Link className="btn btn-primary mx-auto" style={{position:"fixed",left:"650px",top:"750px"}} to='/home'>Return to Home</Link>
<div >
<img src={Image} className='image'/>
</div>
    </div>
  )
}
