import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceholderImage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mission Logo</Text>
    </View>
  );
};

export default PlaceholderImage;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    borderWidth: 3,
    borderColor: '#bbb',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: 8, textAlign: 'center', color: '#bbb' },
});
