import React from 'react';
import { View, Text, StyleSheet, FlatList, Linking } from 'react-native';

const RestaurantCuisines = ({ res }) => {
  return (
    <View style={styles.container}>

      <FlatList
        horizontal
        scrollEnabled={false}
        data={res.categories}
        keyExtractor={(cuisine) => cuisine}
        renderItem={({ item }) => (
          <View style={styles.cuisine}>
            <Text style={styles.text} >{item.title}</Text>
          </View>
        )}
      />

      <View style={styles.address}>
        <Text style={styles.py3}>
          <Text style={styles.contactHeader} >Address:</Text> {res.location.display_address[0]}, {res.location.display_address[1]}
        </Text>

        <Text style={{ alignSelf: 'center', padding: 3 }} onPress={() => { Linking.openURL(`tel:${res.phone}`) }}><Text style={styles.contactHeader} >Phone: </Text>
          <Text style={styles.phone}>{res.display_phone}</Text>
        </Text>
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10

  },
  cuisine: {
    marginHorizontal: 5,
    backgroundColor: 'coral',
    borderWidth: 1,
    borderRadius: 10,
    padding: 2,
    borderColor: 'red'
  },
  text: {
    color: '#fff',
    fontSize: 18
  },
  address: {
    marginVertical: 5,
  },
  contactHeader: {
    fontWeight: 'bold'

  },
  py3: {
    padding: 3
  },
  phone: {
    color: '#0000EE',
    borderWidth: 1,
  }

});

export default RestaurantCuisines
