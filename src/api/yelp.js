import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer C2H2334I7Ci7yUHJhMdFaHNwidiKcGYz0HtCO63oAGh-Bf88G35i7W6hCh0dEjkjMrTpAqw_-Vv9iqG-4r0tzV25c3tKyOo3v8dQ8kNdqXvumTnCHCVf6_jEKspCX3Yx'
  }
});


