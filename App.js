import React from 'react';

import Card from './app/components/common/Card/Card';
import LoadingIndicator from './app/components/common/LoadingIndicator/LoadingIndicator';
import Screen from './app/components/common/Screen';
import { LocaleProvider } from './app/contexts/LocaleContext';

export default function App() {
  return (
    <LocaleProvider>
      <Screen>
        <Card />
        {/* <LoadingIndicator /> */}
      </Screen>
    </LocaleProvider>
  );
}
