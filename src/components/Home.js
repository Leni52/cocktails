import Cocktail from "./Cocktail";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="">
      <div className="row">
        <div className="col-lg-7">
          <div className="header-text">
            <h6>Welcome To our Cocktails page!</h6>
            <h4 style={{ color:"#59595C" }}><em>Browse</em> our recipes</h4>
            <div className="">
              <Link to="/cocktails">Try it out now!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    );
};

export default Home;