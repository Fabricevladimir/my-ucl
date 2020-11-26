import React from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';

import colors from '../../../styles/colors';
import styles from './FormCircle.styles';

export default function FormCircle({ result = null, style }) {
  return result ? (
    <Ionicons
      name={results[result].name}
      color={results[result].color}
      style={[styles.circle, style]}
      size={17}
    />
  ) : (
    <Entypo name="circle" color={colors.lightGray} size={14} style={[styles.circle, style]} />
  );
}

const results = {
  W: {
    name: 'md-checkmark-circle',
    color: colors.green,
  },
  D: {
    name: 'md-remove-circle',
    color: colors.lightGray,
  },
  L: {
    name: 'md-close-circle',
    color: colors.red,
  },
};
