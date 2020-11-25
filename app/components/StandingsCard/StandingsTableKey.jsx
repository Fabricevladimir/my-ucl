import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Text from '../common/Text/Text';
import styles from './StandingsTableKey.styles';
import colors from '../../styles/colors';
import FormCircle from './FormCircle';

const formKeys = [
  { result: 'W', text: 'standings-key-win-form-text' },
  { result: 'L', text: 'standings-key-loss-form-text' },
  { result: 'D', text: 'standings-key-draw-form-text' },
  { text: 'standings-key-not-played-text' },
];

export default function StandingsTableKey() {
  return (
    <View style={styles.tableKey}>
      <Text style={styles.headerText}>standings-key-qualification-header</Text>
      <View style={styles.container}>
        <View style={styles.row}>
          <Ionicons name="md-square" style={styles.icon} color={colors.c1Blue} />
          <Text>standings-key-next-round-text</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="md-square" style={styles.icon} color={colors.C2orange} />
          <Text>standings-key-europa-text</Text>
        </View>
      </View>
      <Text style={styles.headerText}>standings-key-recent-form</Text>
      <View style={styles.container}>
        {formKeys.map((form) => (
          <View key={form.text} style={styles.row}>
            <FormCircle result={form.result} />
            <Text>{form.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
