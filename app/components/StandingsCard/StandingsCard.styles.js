import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  groupTitle: {
    flex: 1,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  content: {
    flexDirection: 'row',
  },
  cardStyle: {
    paddingTop: 0,
    paddingHorizontal: 0,
  },
  delimiter: {
    elevation: 2,
    borderColor: colors.lightGray,
    borderRightWidth: 0.25,
  },
});
