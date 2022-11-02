import React from "react";
import Image from "./../components/food.jpeg";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
    <div style={{ backgroundImage: "linear-gradient(#1d20dd, #fff)"}}>
      <div
        style={{
          backgroundColor: "#e5e5f7",
        }}
      >
        <Navbar />
        <div>
          <h1
            style={{
              color: "#0d6efd",
              textAlign: "center",
              margin: "10px",
              height: "100%",
              // position:"fixed",
              // top:"20px"
            }}
          >
            <b> Welcome to GKMIT'S Restaurant!</b>
          </h1>
          <img
            src={Image}
            style={{
              display: "block",
              position: "fixed",
              top: "190px",
              right: "340px",
              margin: "auto auto ",
              width: "55%",
              borderRadius: "50px",
              padding: "2px",
              border: "7px solid blue",
            }}
          />
          {/* <button
            onClick={redirect}
            type="button"
            className="btn btn-primary"
            style={{ position: "fixed", right: "650px", bottom: "28px" }}
          >
            Checkout Website
          </button> */}
         
        </div>
        
      </div>
      
      <div>
          <h2
            style={{
              color: "#0d6efd",
              textAlign: "center",
              marginTop: "600px",
              height: "100%",
              // position:"fixed",
              // top:"20px"
            }}
          >
            <b> Healthy,Tasty and Fresh Food at your Home.</b>
            <p>Just order relax and enjoy</p>
          </h2>
          
          </div>
          </div>
    </>
  );
};

export default Home;
