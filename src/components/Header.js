import { Link } from "react-router-dom";

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
            <a href="index.html" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 text-uppercase text-white"><i className="fa fa-cocktail fs-1 text-primary me-3"></i>Cocktail Zone</h1>
            </a>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto mx-lg-auto py-0">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About Us</Link>
                    <Link to="/cocktails" className="nav-item nav-link">Recipes</Link>
                </div>
            </div>
        </nav>
    )

}

export default Header;