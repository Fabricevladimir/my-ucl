import React from 'react';

import { View } from 'react-native';

import styles from './Card.styles';

export default function Card({ children }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>{children}</View>
    </View>
  );
}
