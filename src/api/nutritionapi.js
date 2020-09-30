import axios from 'axios';

export default axios.create({
   baseURL:'https://api.nutritionix.com/v1_1/search',
   headers: {
            'Content-Type': 'application/json'
   }
});