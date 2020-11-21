import React from 'react';
import { Text } from 'react-native';

import styles from './Text.styles';
import { useTranslation } from '../../../contexts/LocaleContext';

export default function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {useTranslation(children)}
    </Text>
  );
}
