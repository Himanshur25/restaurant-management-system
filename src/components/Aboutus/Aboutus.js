import React from "react";
import Image from "./../images/foodie.jpeg";
import "./Aboutus.css";
import { Link } from "react-router-dom";
import Images from "./../images/gkmit.jpeg";


const Aboutus = () => {
  return (
    <>
    <div className="aboutus">
    <Link className="btn btn-light mx-1" to="/Home" role="button">
            Back
          </Link>
      <h3 className="about">
        Welcome To <span id="W_Name1">GKMIT Restaurant</span>
      </h3>
      <div className="content">
      <p><b>
        <span id="W_Name2">GKMIT  Restaurant</span> is a Professional{" "}
        <span id="W_Type1">food</span> Platform. Here we will provide you only
        interesting content, which you will like very much. We're dedicated to
        providing you the best of <span id="W_Type2">food</span>, with a focus
        on dependability and <span id="W_Spec">food delievery</span>. We're
        working to turn our passion for <span id="W_Type3">food</span> into a
        booming{" "}
        . We hope you enjoy our <span id="W_Type4">food</span> as much as we
        enjoy offering them to you.
        </b>
      </p>
      <p>
        <i>
        I will keep posting more important posts on my Website for all of you.
        Please give your support and love.
        </i>
      </p>
      
      </div>
      <div className="hero-logo">
                  <img src={Images} alt="GKMIT is busy"/>
              </div>
      <p className="greetings">
        Thanks For Visiting Our Site
        <br />
        <span className="msg">
          Have a nice day!
        </span>
      </p>
      </div>
    </>
  );
};

export default Aboutus;
