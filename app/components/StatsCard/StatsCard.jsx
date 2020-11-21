import React from 'react';
import { View } from 'react-native';

import Text from '../common/Text/Text';
import Card from '../common/Card/Card';
import styles from './StatsCard.styles';
import StatsItem from './StatsItem';

export default function StatsCard({ title, subtitle, value, list }) {
  return (
    <>
      <Text style={styles.sectionTitleText}>{title}</Text>
      <Card>
        {renderHeader()}
        {renderBody()}
      </Card>
    </>
  );

  function renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>{subtitle}</Text>
        <Text style={styles.titleText}>{value}</Text>
      </View>
    );
  }

  function renderBody() {
    return list.map((player) => (
      <View key={player.name}>
        <View style={styles.separator} />
        <StatsItem item={player} />
      </View>
    ));
  }
}
