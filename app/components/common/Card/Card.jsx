import React from 'react';
import { View } from 'react-native';

import styles from './Card.styles';

export default function Card({ children, cardStyle, wrapperStyle }) {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <View style={[styles.card, cardStyle]}>{children}</View>
    </View>
  );
}
