import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import Alert from '../components/Alert';
import ResultsList from '../components/ResultsList';

import useResults from '../hooks/useResults';

const SearchScreen = () => {



  const [searchTerm, setSearchTerm] = useState('');
  const [search, results, err] = useResults();

  const filterByPrice = (price) => results.filter(res => res.price === price);



  return (
    <View style={styles.mainContainer}>
      <SearchBar
        term={searchTerm}
        setSearchTerm={setSearchTerm}
        onTermSubmit={() => search(searchTerm)} />

      {err && results.length === 0 ? (<Alert err={err} />
      ) : results.length > 0 &&
        (
          <ScrollView >
            {filterByPrice('$').length > 0 && (<ResultsList
              results={filterByPrice('$')} title="Cheap Eats" />)}
            {filterByPrice('$$').length > 0 && (<ResultsList
              results={filterByPrice('$$')} title="Moderate" />)}
            {filterByPrice('$$$').length > 0 && (<ResultsList
              results={filterByPrice('$$$')} title="Pricey" />)}
          </ScrollView>)
      }
    </View>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },

  err: {
    color: 'red'
  }

});

export default SearchScreen
