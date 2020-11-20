import React, { useEffect } from 'react';

import Screen from '../components/common/Screen';
// import statsApi from '../api/stats';
import StatsCard from '../components/StatsCard/StatsCard';

export default function StatsPage() {
  useEffect(() => {
    // async function getdata() {
    //   const result = await statsApi.getTopScorers();
    //   console.log(result);
    // }
    // getdata();
  }, []);

  return (
    <Screen>
      <StatsCard
        title="stats-top-goal-scorers-title"
        value="stats-top-goal-scorers-value"
        subtitle="stats-top-goal-scorers-subtitle"
      />
    </Screen>
  );
}
