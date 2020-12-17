import { useApi } from '@fabricefrancois/use-api';
import { FlatList, View } from 'react-native';
import React, { useEffect } from 'react';

import Screen from '../components/common/Screen';
import ListFooter from '../components/StandingsCard/StandingsTableKey/StandingsTableKey';
import standingsApi from '../api/standings';
import StandingsCard from '../components/StandingsCard/StandingsCard';
import LoadingIndicator from '../components/common/LoadingIndicator/LoadingIndicator';
import { getGroupTitle } from '../utils/helpers';

export default function StandingsPage() {
  const { request, loading, data } = useApi(standingsApi.getStandings, { api: { standings: [] } });

  useEffect(() => {
    request();
  }, []);

  return (
    <Screen>
      <LoadingIndicator visible={loading} />
      <FlatList
        data={data.api.standings}
        renderItem={({ item: group }) => (
          <View style={{ paddingHorizontal: 5 }}>
            <StandingsCard group={group} groupTitle={getGroupTitle(group)} />
          </View>
        )}
        onRefresh={() => request(null, null, { forceUpdate: true })}
        refreshing={loading}
        keyExtractor={(item) => getGroupTitle(item)}
        ListFooterComponent={ListFooter}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </Screen>
  );
}
