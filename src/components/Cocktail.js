import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CocktailService from '../services/cocktailService';


const Cocktail = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleImageClick= (cocktail) => {
    setSelectedCocktail(cocktail);
    setShowPopup(true);
  }

  const handleSearch = async () => {
    try {
      if (searchTerm.trim() === '') {
        setCocktails([]);
        return;
      }

      const data = await CocktailService.searchCocktails(searchTerm);
      setCocktails(data.drinks || []);
      setSelectedCocktail(null);
      setShowPopup(false);
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
    beforeChange:() => setShowPopup(false) //hide the popup
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === '' && cocktails.length > 0) {
      setCocktails([]);
    }
  };

  return (
    <div className="slider-container">
      <p className='search-description'>Discover a world of delightful flavors with our cocktails recipe page. <br/>
        Explore a diverse collection of cocktail recipes that will elevate your mixology skills.<br/>
         From classic favorites to innovative concoctions, <br/>
          unlock the secrets to crafting refreshing beverages that are perfect for any occasion. <br/>
           Cheers to creative mixology and unforgettable flavors!</p>
           <div> <i className="fa fa-glass" ></i></div>
      <p>Search for a cocktail by entering a keyword.
     
      </p>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>

      <h2>Results: </h2>
      {cocktails.length > 0 ? (
        <Slider className="slider" {...settings}>
          {cocktails.map((cocktail) => (
            <div key={cocktail.idDrink} className="cocktail-item">
              <h3>{cocktail.strDrink}</h3>
              <img
                src={cocktail.strDrinkThumb}
                style={{ maxWidth: '400px' }}
                alt={cocktail.strDrink}
                onClick={() => handleImageClick(cocktail)}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p>No cocktails found with this keyword. Please try another.</p>
      )}

{selectedCocktail && showPopup && (
        <div className="popup">
          <h3 style={{ maxWidth: '600px' }}>{selectedCocktail.strDrink}</h3>
          <p>{selectedCocktail.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default Cocktail;