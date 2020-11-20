import Constants from 'expo-constants';

const settings = {
  dev: {
    apiUrl: 'https://v2.api-football.com/',
    apiKey: 'APIKEY',
  },
  staging: {
    apiUrl: 'https://v2.api-football.com/',
    apiKey: 'APIKEY',
  },
  prod: {
    apiUrl: 'https://v2.api-football.com/',
    apiKey: 'APIKEY',
  },
};

function getCurrentSettings() {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === 'staging') return settings.staging;
  return prod;
}

export default getCurrentSettings();
