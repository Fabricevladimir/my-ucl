import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    width: 35,
    height: 40,
    textAlign: 'center',
    borderColor: colors.lightGray,
    borderTopWidth: 1,
    textAlignVertical: 'center',
  },
  header: {
    ...theme.subTitleText,
    height: 19,
    borderTopWidth: 0,
  },
});
