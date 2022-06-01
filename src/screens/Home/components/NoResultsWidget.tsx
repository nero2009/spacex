import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoResultsWidget = () => {
  return (
    <View style={styles.container}>
      <Text>No Launches</Text>
    </View>
  );
};

export default NoResultsWidget;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#eee',
    shadowOffset: { width: 3, height: 10 },
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
