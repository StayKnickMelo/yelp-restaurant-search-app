import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ setSearchTerm, term, onTermSubmit }) => {

  return (
    <View style={styles.container} >
      <Feather size={35} name="search" />
      <TextInput
        onEndEditing={onTermSubmit}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(newTerm) => setSearchTerm(newTerm)}
        value={term}
        style={styles.text} placeholder='Search' />
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    padding: 5,
    borderRadius: 5,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },

  text: {
    fontSize: 20,
    marginLeft: 10,
    height: 50,
    flex: 1
  },
  icon: {
    fontSize: 30,
  }

});

export default SearchBar
