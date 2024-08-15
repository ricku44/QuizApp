import React from 'react';
import {Image, Text, StyleSheet} from 'react-native';

export default function Logo() {
  return <Text>Logo</Text>; //<Image source={require('../assets/logo.png')} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});
