import React from 'react';

import logger from './app/utils/logger';
import StandingsPage from './app/pages/StandingsPage';
import { LocaleProvider } from './app/contexts/LocaleContext';

export default function App() {
  logger.init();
  return (
    <LocaleProvider>
      <StandingsPage />
    </LocaleProvider>
  );
}
