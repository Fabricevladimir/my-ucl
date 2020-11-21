import { ScrollView } from 'react-native';
import React, { useEffect } from 'react';

import theme from '../styles/theme';
import Screen from '../components/common/Screen';
import useApi from '../hooks/useApi';
import teamsApi from '../api/teams';
import statsApi from '../api/stats';
import StatsCard from '../components/StatsCard/StatsCard';
import LoadingIndicator from '../components/common/LoadingIndicator/LoadingIndicator';
import { mapDataToTopScorers } from '../utils/helpers';

export default function StatsPage() {
  const teamStats = useApi(teamsApi.getTeams, { teams: [] });
  const goalStats = useApi(statsApi.getTopScorers, { topscorers: [] });

  useEffect(() => {
    goalStats.request();
    teamStats.request();
  }, []);

  return (
    <Screen>
      <LoadingIndicator visible={goalStats.loading} />
      <ScrollView
        indicatorStyle="white"
        contentContainerStyle={{ padding: theme.defaultContainerPadding }}>
        <StatsCard
          subtitle="stats-top-goal-scorers-subtitle"
          value="stats-top-goal-scorers-value"
          title="stats-top-goal-scorers-title"
          list={mapDataToTopScorers(goalStats.data.topscorers, teamStats.data.teams)}
        />
      </ScrollView>
    </Screen>
  );
}
