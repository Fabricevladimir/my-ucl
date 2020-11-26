import React, { useState } from 'react';
import { View } from 'react-native';

import Card from '../common/Card/Card';
import Text from '../common/Text/Text';
import styles from './StandingsCard.styles';
import TeamStats from './TeamStats/TeamStats';
import TeamTitlesList from './TeamTitlesList/TeamTiltlesList';

export default function StandingsCard({ group, groupTitle }) {
  const [position, setPosition] = useState({ drag: 0, scroll: 0 });
  const [isVisible, setIsVisible] = useState(false);

  function handleScrollStop(event, title) {
    setPosition({ ...position, [title]: event.nativeEvent.contentOffset.x });
    setIsVisible(!(position.drag === 0 && position.scroll === 0));
  }

  return (
    <Card cardStyle={styles.cardStyle}>
      <Text style={styles.groupTitle}>{groupTitle}</Text>
      <View style={styles.content}>
        <TeamTitlesList teams={group} />
        {isVisible && <View style={styles.delimeter} />}
        <TeamStats teams={group} onScrollStop={handleScrollStop} />
      </View>
    </Card>
  );
}
