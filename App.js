import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Screen from './app/components/common/Screen';

export default function App() {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
