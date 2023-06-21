import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CocktailService from '../services/cocktailService';
import './Cocktail.css';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

const Cocktail = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);

  const handleSearch = async () => {
    try {
      if (searchTerm.trim() === '') {
       
        setCocktails([]);
        return;
      }

      const data = await CocktailService.searchCocktails(searchTerm);
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error('Error searching cocktails:', error.message);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === '' && cocktails.length > 0) {

      setCocktails([]);
    }
  };

  return (
    <div className='slider-container'>
      <p>Hi, welcome to our cocktail's page. Search for a cocktail by entering a keyword.</p>
<Link to="/home">Home</Link>
<Link to="/about">About</Link>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

       <h2>Results</h2>
      {cocktails.length > 0 ? (
        <Slider className='slider'
         {...settings}>
          {cocktails.map((cocktail) => (
            <div key={cocktail.idDrink}>
              <h3>{cocktail.strDrink}</h3>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            </div>
          ))}
        </Slider>
      ) : (
        <p>No cocktails found.</p>
      )}
    </div>
  );
};

export default Cocktail;
