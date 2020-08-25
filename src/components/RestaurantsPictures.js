import React from 'react';
import { StyleSheet, FlatList, Image } from 'react-native';

const RestaurantsPictures = ({ photos }) => {
  return (
    photos.length > 0 &&
    <FlatList
      showsVerticalScrollIndicator={false}
      data={photos}
      keyExtractor={(photo) => photo}
      renderItem={({ item }) => (
        <Image style={styles.photo} source={{ uri: item }} />
      )} />
  )
};

const styles = StyleSheet.create({
  photo: {
    height: 250,
    width: 350,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'lightgray',
    alignSelf: 'center'
  }

});

export default RestaurantsPictures
