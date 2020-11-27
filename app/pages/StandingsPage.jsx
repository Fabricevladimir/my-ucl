import { FlatList, View } from 'react-native';
import React, { useEffect } from 'react';

import useApi from '../hooks/useApi';
import Screen from '../components/common/Screen';
import ListFooter from '../components/StandingsCard/StandingsTableKey/StandingsTableKey';
import standingsApi from '../api/standings';
import StandingsCard from '../components/StandingsCard/StandingsCard';
import LoadingIndicator from '../components/common/LoadingIndicator/LoadingIndicator';
import { getGroupTitle } from '../utils/helpers';

export default function StandingsPage() {
  const api = useApi(standingsApi.getStandings, { standings: [] });

  useEffect(() => {
    api.request();
    return api.cancel;
  }, []);

  return (
    <Screen>
      <LoadingIndicator visible={api.loading} />
      <FlatList
        data={api.data.standings}
        renderItem={({ item: group }) => (
          <View style={{ paddingHorizontal: 5 }}>
            <StandingsCard group={group} groupTitle={getGroupTitle(group)} />
          </View>
        )}
        onRefresh={() => api.request(null, null, { forceUpdate: true })}
        refreshing={api.loading}
        keyExtractor={(item) => getGroupTitle(item)}
        ListFooterComponent={ListFooter}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </Screen>
  );
}
