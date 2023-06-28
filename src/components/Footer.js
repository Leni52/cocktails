import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-img text-secondary" style={{ marginTop: 90 + 'px' }}>
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-6 mb-lg-n5">

                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                    <h4 className="text-primary text-uppercase mb-4">Get In Touch</h4>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-geo-alt text-primary me-2"></i>
                                        <p className="mb-0">Varna, Bulgaria</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-envelope-open text-primary me-2"></i>
                                        <p className="mb-0">lencegeorgieva@yahoo.com</p>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <h4 className="text-primary text-uppercase mb-4">Quick Links</h4>
                                    <div className="d-flex flex-column justify-content-start">
                                        <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                        <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-secondary py-4" >
                <div className="container text-center">
                    <p className="mb-0">&copy; <Link to="/cocktails" className="text-white border-bottom">Cocktails</Link>. All Rights Reserved.

                    </p>
                </div>
            </div>
        </div>

    )


}

export default Footer;