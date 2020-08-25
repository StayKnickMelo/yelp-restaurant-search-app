import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const Alert = ({err}) => {
  return (
    <View style={styles.container}>
      <Feather name='alert-triangle' size={30} style={{color: '#fff'}} />
      <Text style={{ color: '#fff'}}>
        {err}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fc5603',
    height: 90,
    width: 200,
    alignSelf: 'center',
    marginTop: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'lightgray'

  }

});

export default Alert
