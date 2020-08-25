import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RestaurantItem = ({ res: { rating, review_count, name, image_url } }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: image_url }} />
      
        <Text style={styles.resName}>{name}</Text>
      <Text style={styles.text}>{rating} Stars, {review_count} Reviews</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 300,
    marginLeft: 10,
    marginVertical: 10
  },
  img: {
    width: 300,
    height: 150,
    borderRadius: 5
  },
  text: {
    color: '#9C9E9B',
  },
  resName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5
  }

});

export default RestaurantItem
