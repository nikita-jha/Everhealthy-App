import axios from 'axios';

export default axios.create({
   headers: {
      'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com',
      'X-RapidAPI-Key': '6b01f04864msh502776731941c76p181e8djsn2e2394ee1e4e'
   }
});