import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import yelpAPI from '../api/yelp';
import Alert from '../components/Alert';

import RestaurantPictures from '../components/RestaurantsPictures';
import RestaurantCuisines from '../components/RestaurantCuisines';

const RestaurantDetailScreen = ({ navigation }) => {

  const [res, setRes] = useState(null);
  const [err, setErr] = useState('')

  const fetchResInfo = async (resId) => {
    try {
      const res = await yelpAPI.get(`/${resId}`);

      setRes(res.data);
      console.log(res.data.photos);

    } catch (error) {
      if (error.response.status === 404) {
        setErr('Not Found')

      };

      console.log(error.response)

      setTimeout(() => {
        setErr('')
      }, 2000)


    }

  }

  useEffect(() => {
    fetchResInfo(navigation.getParam('id'));
  }, []);

  return (
    <View style={styles.container} >
      {err !== '' && (<Alert err={err} />)}
      {res !== null &&
        <>
          <Text style={styles.title}>{res.name}</Text>
          <RestaurantPictures photos={res.photos} />
          <RestaurantCuisines res={res} />
        </>
      }
    </View>
  )
};

const styles = StyleSheet.create({
  photo: {
    height: 250,
    width: 350,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'lightgray'
  },
  container: {
    margin: 10,
    flex: 1,
    
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  cuisines: {
    justifyContent: 'center'
  }

});

export default RestaurantDetailScreen
