import React from 'react';
import { View } from 'react-native';

import styles from './MatchForm.styles';
import FormCircle from './FormCircle';

export default function MatchForm({ form = new Array(5).fill(null), numberOfMatches = 5 }) {
  for (let index = 0; form.length < numberOfMatches; index++) form.push(null);

  return (
    <View style={styles.container}>
      {form.map((value, index) => (
        <FormCircle key={index} result={value} />
      ))}
    </View>
  );
}
