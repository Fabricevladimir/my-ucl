import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import * as Localize from 'expo-localization';
import { I18nManager } from 'react-native';

const fallback = { locale: 'ht-HT', isRTL: false };

const translationGetters = {
  'ht-HT': () => require('./ht.json'),
  'en-US': () => require('./en.json'),
};

const t = memoize(
  (key, config) => (i18n.t(key, config).includes('missing') ? key : i18n.t(key, config)),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

function init() {
  let isRTL = Localize.isRTL;

  // TODO: auto get locale
  let locale;

  // set fallback
  if (!translationGetters[locale]) {
    isRTL = fallback.isRTL;
    locale = fallback.locale;
  }

  t.cache.clear();
  i18n.locale = locale;
  i18n.fallbacks = true;
  i18n.translations = { [locale]: translationGetters[locale]() };
  I18nManager.forceRTL(isRTL);
}

export { t, init, translationGetters };
