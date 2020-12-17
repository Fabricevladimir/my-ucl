import React from 'react';

import logger from './app/utils/logger';
import StatsPage from './app/pages/StatsPage';
import { LocaleProvider } from './app/contexts/LocaleContext';

export default function App() {
  logger.init();
  return (
    <LocaleProvider>
      <StatsPage />
    </LocaleProvider>
  );
}
