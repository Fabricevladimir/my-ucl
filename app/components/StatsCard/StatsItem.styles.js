import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export default StyleSheet.create({
  row: {
    paddingHorizontal: 1,
    paddingVertical: 8,
    flexDirection: 'row',
  },
  text: {
    marginHorizontal: 8,
  },
  teamContainer: {
    paddingLeft: 8,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 16,
    width: 16,
  },
  rankText: {
    width: 20,
    marginLeft: 10,
  },
  teamName: {
    ...theme.subTitleText,
  },
  value: {
    marginLeft: 'auto',
  },
});
