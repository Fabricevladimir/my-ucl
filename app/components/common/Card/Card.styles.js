import { StyleSheet } from 'react-native';

import theme from '../../../styles/theme';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  card: {
    padding: 10,
    elevation: 1,
    borderRadius: 5,
    backgroundColor: theme.surface,
  },
  wrapper: {
    padding: 4,
    borderRadius: 5,
    backgroundColor: colors.transparentWhite,
    elevation: 1,
  },
});
