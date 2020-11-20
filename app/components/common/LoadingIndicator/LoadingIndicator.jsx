import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './LoadingIndicator.styles';

export default function LoadingIndicator({ visible = true }) {
  return visible ? (
    <View style={styles.overlay}>
      <LottieView autoPlay loop source={require('../../../assets/animations/loading.json')} />
    </View>
  ) : null;
}
