import { StyleSheet } from 'react-native';

import colors from '../../../styles/colors';
import theme from '../../../styles/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '50%',
  },
  titleContainer: {
    marginLeft: 13,
  },
  title: {
    ...theme.titleText,
  },
  listContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  row: {
    height: 40,
    flexDirection: 'row',
  },
  designation: {
    width: 3,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  text: {
    borderColor: colors.lightGray,
    borderTopWidth: 1,
    textAlignVertical: 'center',
  },
  logoContainer: {
    width: 40,
    alignItems: 'center',
    borderColor: colors.lightGray,
    borderTopWidth: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 25,
    height: 25,
  },
  teamTitle: {
    flex: 1,
  },
});
