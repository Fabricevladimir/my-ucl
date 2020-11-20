import React, { useContext } from 'react';

import { t, init } from '../locales';

init();
const LocaleContext = React.createContext();

function LocaleProvider({ children }) {
  return <LocaleContext.Provider value={t}>{children}</LocaleContext.Provider>;
}

// Custom hook
function useTranslation(value) {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('Translation must be accesed from within the LocaleProvider');
  }

  return context(value);
}

export { useTranslation, LocaleProvider };
