import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-muted">
  <div className="container-fluid">

        <a class="nav-link"  >GKMIT RESTAURANT <span class="sr-only"></span></a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-2" to="/register" role="button">SignUp</Link>
      </div>
    
    </div>
</nav>
    );
};

export default Navbar;