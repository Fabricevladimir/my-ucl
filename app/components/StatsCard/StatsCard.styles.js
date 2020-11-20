import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import theme from '../../styles/theme';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  sectionTitleText: {
    ...theme.sectionTitleText,
  },
  titleText: {
    ...theme.titleText,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray,
  },
});
