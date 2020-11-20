import React from 'react';
import { View } from 'react-native';

import Text from '../common/Text/Text';
import Card from '../common/Card/Card';
import styles from './StatsCard.styles';
import StatsItem from './StatsItem';

const item = { rank: 1, name: 'Fabrice Francois', team: 'Real Madrid', value: 15 };

export default function StatsCard({ title, subtitle, value }) {
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
    return (
      <View key>
        <View style={styles.separator} />
        <StatsItem item={item} />
      </View>
    ); /* {list.map((item) => (
            <View key={item.name}>
              <Separator />
              <ListItem item={item} />
            </View>
          ))} */
  }
}
