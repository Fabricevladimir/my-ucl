import React from 'react';
import { FlatList } from 'react-native';

// import Text from '../components/common/Text/Text';
// import useApi from '../hooks/useApi';
import Screen from '../components/common/Screen';

import LoadingIndicator from '../components/common/LoadingIndicator/LoadingIndicator';

export default function StandingsPage() {
  return (
    <Screen>
      <LoadingIndicator visible={false} />
      <FlatList />
    </Screen>
  );
}
