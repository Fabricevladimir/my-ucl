import React from 'react';
import { View, ScrollView } from 'react-native';
import colors from '../../styles/colors';

import Text from '../common/Text/Text';
import styles from './TeamStats.styles';
import MatchForm from './MatchForm';

const statKeys = [
  'matchsPlayed',
  'win',
  'draw',
  'lose',
  'points',
  'goalsFor',
  'goalsAgainst',
  'goalsDiff',
  'forme',
];

const headers = {
  win: 'standings-header-win',
  draw: 'standings-header-draw',
  lose: 'standings-header-lose',
  forme: 'standings-header-form',
  points: 'standings-header-points',
  goalsFor: 'standings-header-goals-for',
  goalsDiff: 'standings-header-goals-diff',
  goalsAgainst: 'standings-header-goals-against',
  matchsPlayed: 'standings-header-matches-played',
};

export default function TeamStats({ teams, onScrollStop = () => null }) {
  return (
    <ScrollView
      horizontal
      onScrollEndDrag={(e) => onScrollStop(e, 'drag')}
      onMomentumScrollEnd={(e) => onScrollStop(e, 'scroll')}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {renderHeaders()}
        {renderBody(teams)}
      </View>
    </ScrollView>
  );
}

function renderHeaders() {
  return (
    <View style={styles.row}>
      {statKeys.map((key) => (
        <Text key={key} style={getStyle(key, { ...styles.cell, ...styles.header })}>
          {headers[key]}
        </Text>
      ))}
    </View>
  );
}

function renderBody(teams) {
  return teams.map((team) => (
    <View key={team.team_id} style={styles.row}>
      {renderRow({ ...team, ...team.all }, { ...styles.cell })}
    </View>
  ));
}

function renderRow(data, defaultStyle) {
  return statKeys.map((key) => {
    if (key !== 'forme') {
      return (
        <Text key={key} style={getStyle(key, defaultStyle)}>
          {data[key]}
        </Text>
      );
    }
    return <MatchForm key={key} form={[...data[key]]} />;
  });
}

function getStyle(key, style) {
  if (key === 'points') {
    style = { ...style, fontWeight: 'bold', color: colors.black };
  }

  if (key === 'forme') {
    style = { ...style, width: 150 };
  }

  return style;
}
