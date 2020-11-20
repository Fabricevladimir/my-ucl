import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from './app/components/common/Text/Text';
import Screen from './app/components/common/Screen';
import { LocaleProvider } from './app/contexts/LocaleContext';

export default function App() {
  return (
    <LocaleProvider>
      <Screen>
        <View style={styles.container}>
          <Text>hello</Text>
        </View>
      </Screen>
    </LocaleProvider>
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
