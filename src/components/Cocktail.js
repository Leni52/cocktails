import React, { useState } from 'react';
import CocktailService from '../services/cocktailService';

const Cocktail = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);

  const handleSearch = async () => {
    try {
      if (searchTerm.trim() === '') {
        // Clear the cocktail list if search term is empty
        setCocktails([]);
        return;
      }

      const data = await CocktailService.searchCocktails(searchTerm);
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error('Error searching cocktails:', error.message);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === '' && cocktails.length > 0) {
      // Clear the cocktail list when input is empty and there is a list
      setCocktails([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      <h2>Results</h2>
      {cocktails.length > 0 ? (
        <ul>
         
            {cocktails.map((cocktail) => (
              <li key={cocktail.idDrink}>
                {cocktail.strDrink}
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              </li>
            ))}
         
          
          
        </ul>
      ) : (
        <p>No cocktails found.</p>
      )}
    </div>
  );
};

export default Cocktail;
