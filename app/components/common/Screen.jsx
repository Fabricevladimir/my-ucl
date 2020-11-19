import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';

export default function Screen({ children }) {
  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    borderWidth: 2, // FIXME: remove
    borderColor: 'red', // FIXME: remove
  },
});
