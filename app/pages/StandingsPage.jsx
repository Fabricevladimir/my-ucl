import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

// import Text from '../components/common/Text/Text';
import useApi from '../hooks/useApi';
import Screen from '../components/common/Screen';
import ListFooter from '../components/StandingsCard/StandingsTableKey';
import standingsApi from '../api/standings';
import LoadingIndicator from '../components/common/LoadingIndicator/LoadingIndicator';

export default function StandingsPage() {
  const api = useApi(standingsApi.getStandings, { standings: [] });

  useEffect(() => {
    api.request();
  }, []);

  return (
    <Screen>
      <LoadingIndicator visible={api.loading} />
      <FlatList
        data={api.data.standings}
        keyExtractor={(item) => getGroupTitle(item)}
        ListFooterComponent={ListFooter}
      />
    </Screen>
  );
}

function getGroupTitle(clubList) {
  return clubList[0].group.split(':')[1];
}
