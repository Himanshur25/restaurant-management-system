import React from 'react'
import { Link } from "react-router-dom";


export default function Payment() {
    
  return (
    <div>
    <div>
      <h3 style={{textAlign:"center",display:"flex",justifyContent:"center",marginTop:"94px",fontSize:"60px",background:"yellow"}}><b>Happy Ordering </b></h3>
      <h3 style={{textAlign:"center",display:"flex",justifyContent:"center",marginTop:"114px",fontSize:"30px"}}><b>Just Relax and Enjoy </b></h3>

    </div>
    <Link className="btn btn-primary mx-auto" style={{position:"fixed",left:"700px",top:"750px"}} to='/home'>Return to Home</Link>

    </div>
  )
}
