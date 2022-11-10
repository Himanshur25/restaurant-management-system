import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar2 = (props) => {


  return (
    <nav className="navbar navbar-expand-lg bg-light" style={{fontFamily:' "Merriweather", serif'}}>
      <a className="nav-link" style={{ marginLeft: "20px" }}>
        GKMIT RESTAURANT <span className="sr-only"></span>
      </a>
      <Link className="navbar-brand mx-auto">
        <b>Checkout the Tasty Food </b>
      </Link>
      <Link className="btn btn-primary mx-4" to="/aboutus" role="button">
        About Us
      </Link>
      <Link className="btn btn-primary mx-1" to="/contactus" role="button">
        Contact Us
      </Link>
      <Link className="btn btn-primary mx-4" to="/cart">
        Cart
        {props.Count}
      </Link>
      <Link className="btn btn-primary mx-1" to="/login" role="button">
        Sign Out
      </Link>
    </nav>
  );
};

export default Navbar2;
