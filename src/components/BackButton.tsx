import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

interface BackButtonProps {
  goBack: () => void; // Define the type for the goBack function
}

export default function BackButton({goBack}: BackButtonProps) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      {/* <Image
        style={styles.image}
        source={require('../assets/arrow_back.png')}
      /> */}
      <Text>Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
});
