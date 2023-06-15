import axios from 'axios';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

const CocktailService = {
  searchCocktails: async (searchTerm) => {
    try {
      const response = await axios.get(`${API_URL}/search.php?s=${searchTerm}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },

 
};

export default CocktailService;
