import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export default StyleSheet.create({
  tableKey: {
    padding: 5,
    marginTop: 10,
    backgroundColor: theme.surface,
  },
  container: {
    marginBottom: 10,
    marginLeft: 5,
  },
  headerText: {
    fontWeight: 'bold',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
});
