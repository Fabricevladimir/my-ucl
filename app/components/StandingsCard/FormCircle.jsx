import React from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';

import colors from '../../styles/colors';
import styles from './FormCircle.styles';

const results = {
  w: {
    name: 'md-checkmark-circle',
    color: colors.green,
  },
  d: {
    name: 'md-remove-circle',
    color: colors.lightGray,
  },
  l: {
    name: 'md-close-circle',
    color: colors.red,
  },
};

export default function FormCircle({ result, style }) {
  return result ? (
    <Ionicons
      name={results[result].name}
      color={results[result].color}
      style={[styles.circle, style]}
      size={15}
    />
  ) : (
    <Entypo name="circle" color={colors.lightGray} size={12} style={[styles.circle, style]} />
  );
}
