import React from 'react';
import { View, StyleSheet, ImageBackground, StatusBar } from 'react-native';

import theme from '../../styles/theme';

export default function Screen({ children }) {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={theme.primaryDark} barStyle="light-content" />
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/background.png')}>
        {children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    borderWidth: 2, // FIXME: remove
    borderColor: 'red', // FIXME: remove
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
});
