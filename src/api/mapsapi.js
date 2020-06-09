import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.yelp.com/v3/businesses',
   headers: {
      Authorization: 'Bearer csGCK92Kfqj8sfw2M_VbGk1RTzAV1jfz0_XPmmwgmZ3Q3pmyauu5yiu-0fUZb1_XHbWDMAS2EZohdf4sKHZvS8Z2qtYFRIdVov26QUU7Qn05BQ-dSAU6Sax8X9PdXnYx'
   }
});