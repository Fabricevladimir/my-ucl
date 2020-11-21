import React from 'react';
import { View, Image } from 'react-native';

import Text from '../common/Text/Text';
import styles from './StatsItem.styles';

export default function Item({ item }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rankText}>{item.rank}</Text>
      <View>
        <Text style={styles.text}>{item.name}</Text>
        <View style={styles.teamContainer}>
          <Image style={styles.logo} source={{ uri: item.imageUri }} />
          <Text style={[styles.text, styles.teamName]}>{item.team}</Text>
        </View>
      </View>
      <Text style={styles.value}>{item.value}</Text>
    </View>
  );
}
