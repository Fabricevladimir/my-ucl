import React from 'react';
import { Image, View } from 'react-native';

import Text from '../../common/Text/Text';
import styles from './TeamTitleList.styles';
import colors from '../../../styles/colors';

const borderColors = {
  1: { backgroundColor: colors.c1Blue },
  2: { backgroundColor: colors.c1Blue },
  3: { backgroundColor: colors.C2orange },
  4: { backgroundColor: 'transparent', borderBottomWidth: 0 },
};

export default function TeamTitlesList({ teams }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>standings-title-list-header</Text>
      </View>
      <View style={styles.listContainer}>
        {teams.map((team) => (
          <View key={team.team_id} style={styles.row}>
            <View style={[styles.designation, borderColors[team.rank]]} />
            <Text style={styles.text}>{team.rank}</Text>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={{ uri: team.logo }} />
            </View>
            <Text numberOfLines={1} style={[styles.text, styles.teamTitle]}>
              {team.teamName}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
