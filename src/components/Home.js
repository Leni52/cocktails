import Cocktail from "./Cocktail";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                    
                            <h1 className="font-secondary text-primary mb-4">Super refreshing!</h1>
                            <h1 className="display-1 text-uppercase text-white mb-4">Cocktail's Zone</h1>
                            <div className="image-container">
                            <img className="home-img" src={process.env.PUBLIC_URL + '/img/mojito.jpg'} />
                        </div>
                            <h1 className="text-uppercase text-white">The Best Cocktails In town</h1>
                            
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                                <Link to="/about" href="" className="btn btn-primary border-inner py-3 px-5 me-5">Read More</Link>
                            </div>
                        </div>
                       


                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;