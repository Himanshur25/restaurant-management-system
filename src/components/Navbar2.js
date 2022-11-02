import React from 'react';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
// import Home from './Home';

const Navbar2 = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Home">My Restaurant</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
      </ul>
     {/* < Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/fastfood" >Fast Food</Dropdown.Item>
        <Dropdown.Item href="/shakes">Shakes</Dropdown.Item>
        <Dropdown.Item href="/Parantha">Parantha</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
      <Link className="navbar-brand mx-auto"><b>Welcome to GKMIT Restaurant</b></Link>
       <Link className="btn btn-primary mx-4" to="/checkout">Cart</Link>
      <Link className="btn btn-primary mx-1" to="/login" role="button" onClick={<login/>}>Sign Out</Link>
      </div>
    
    </div>
</nav>
    );
};

export default Navbar2;