import React, { useState } from 'react';
import { Link } from "react-router-dom";


const About = () => {
    return (
        <>
            <div className="container-fluid bg-dark bg-img p-5 mb-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="display-4 text-uppercase text-white">About Us</h1>
                        <Link to="/">Home</Link>
                        <i className="far fa-square text-primary px-2"></i>
                        <Link to="/cocktails">Recipes</Link>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{ maxWidth: 600 + 'px' }}>
                        <h2 className="text-primary font-secondary">About Us</h2>
                        <h1 className="display-4 text-uppercase">Welcome To Cocktail Zone</h1>
                    </div>
                    <div className="row gx-5">

                        <div className="row gx-5">
                            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 400 + 'px' }}>
                                <div className="position-relative h-100">
                                    <img
                                        className="background-about"
                                        src={process.env.PUBLIC_URL + '/img/cocktail-background.jpg'}
                                        alt=""
                                        style={{
                                            objectFit: 'cover',
                                            opacity: 0.5, // Adjust the opacity value as per your preference
                                            zIndex: -1, // Set a negative z-index to position the image behind other elements
                                        }}
                                    />
                                    <div className="overlay-div">
                                        {/* Content of the overlaying div */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 pb-5">
                            <h4 className="mb-4">Cheers to endless inspiration and unforgettable sips!</h4>
                            <p className="mb-5">Welcome to our cocktails page, your ultimate destination for discovering a wide range of delicious
                                and creative cocktail recipes. Whether you're a seasoned mixologist or a curious beginner,
                                our extensive collection of cocktail recipes is sure to satisfy your taste buds.
                                From classic favorites like the Margarita and Old Fashioned to exciting and innovative concoctions,
                                you'll find the perfect cocktail recipe to elevate any occasion.
                            </p>
                            <div className="row g-5">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4" style={{ width: 90 + 'px', height: 90 + 'px' }}>
                                        <i className="fa fa-heartbeat fa-2x text-white"></i>
                                    </div>
                                    <h4 className="text-uppercase">100% Tasty</h4>
                                    <p className="mb-0">Indulge in a delightful symphony of flavors with our icon collection of 100% tasty cocktails.</p>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4" style={{ width: 90 + 'px', height: 90 + 'px' }}>
                                        <i className="fa fa-award fa-2x text-white"></i>
                                    </div>
                                    <h4 className="text-uppercase">Award Winning Recipes</h4>
                                    <p className="mb-0">Experience the pinnacle of mixology mastery with our icon collection of award-winning cocktails, crafted to perfection and celebrated for their exceptional taste.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;