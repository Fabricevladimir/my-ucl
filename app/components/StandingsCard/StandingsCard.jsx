import React from 'react';
import { View } from 'react-native';

import Card from '../common/Card/Card';
import Text from '../common/Text/Text';
import styles from './StandingsCard.styles';
import TeamTitlesList from './TeamTiltlesList';

export default function StandingsCard({ group, groupTitle }) {
  return (
    <Card cardStyle={styles.cardStyle}>
      <Text style={styles.groupTitle}>{groupTitle}</Text>
      <View style={styles.content}>
        <TeamTitlesList teams={group} />
      </View>
    </Card>
  );
}
