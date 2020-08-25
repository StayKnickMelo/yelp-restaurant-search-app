import { useEffect, useState } from 'react';
import yelpAPI from '../api/yelp';


export default () => {

  const [results, setResults] = useState([]);
  const [err, setErr] = useState('');

  const search = async (term) => {
    try {
      const res = await yelpAPI.get(`/search`, {
        params: {
          limit: 50,
          term,
          location: 'san fransicso'
        }
      });

      setResults(res.data.businesses);

    } catch (error) {

      if (error.response.status === 404) {
        setErr('Not Found')
      };

      setTimeout(() => {
        setErr('')

      }, 3000)
      console.log(error.response.status)
    }


  };

  useEffect(() => {
    search('shrimp');
  }, []);

  return [search, results, err];

}




