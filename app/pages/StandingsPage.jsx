import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

// import Text from '../components/common/Text/Text';
import useApi from '../hooks/useApi';
import Screen from '../components/common/Screen';
import standingsApi from '../api/standings';

import LoadingIndicator from '../components/common/LoadingIndicator/LoadingIndicator';

export default function StandingsPage() {
  const api = useApi(standingsApi.getStandings, { standings: [] });

  useEffect(() => {
    api.request();
  }, []);

  console.log(api.data.standings[0]);
  return (
    <Screen>
      <LoadingIndicator visible={api.loading} />
      <FlatList data={api.data.standings} keyExtractor={(item) => getGroupTitle(item)} />
    </Screen>
  );
}

function getGroupTitle(clubList) {
  return clubList[0].group.split(':')[1];
}
