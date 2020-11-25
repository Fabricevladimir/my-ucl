import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: 140,
    height: 40,
    alignItems: 'center',
    marginRight: 10,
    borderColor: colors.lightGray,
    flexDirection: 'row',
    borderTopWidth: 1,
    justifyContent: 'center',
  },
});
