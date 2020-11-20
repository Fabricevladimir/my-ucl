import React from 'react';

import Card from './app/components/common/Card/Card';
import Screen from './app/components/common/Screen';
import { LocaleProvider } from './app/contexts/LocaleContext';

export default function App() {
  return (
    <LocaleProvider>
      <Screen>
        <Card />
      </Screen>
    </LocaleProvider>
  );
}
