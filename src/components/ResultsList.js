import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import RestaurantItem from '../components/RestaurantItem';

import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
  return (
    < View style={styles.borderLine}>
      <Text style={styles.title}>{title}</Text>
      {results.length > 0 && (
        <FlatList
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={result => result.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', { id: item.id })}>
              <RestaurantItem res={item} />
            </TouchableOpacity>
          )} />
      )}

    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10
  },
  borderLine: {
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
    marginVertical: 10
  }

});

export default withNavigation(ResultsList)
