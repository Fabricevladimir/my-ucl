import { StyleSheet } from 'react-native';

import theme from '../../../styles/theme';

export default StyleSheet.create({
  overlay: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    position: 'absolute',
    backgroundColor: theme.background,
  },
});
