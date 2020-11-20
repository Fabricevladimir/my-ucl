import dayjs from 'dayjs';
import AsyncStorage from '@react-native-community/async-storage';

import logger from './logger';

const prefix = 'cache';
const expiryInDays = 1;

async function store(key, value) {
  try {
    await AsyncStorage.setItem(prefix + key, JSON.stringify({ value, timestamp: Date.now() }));
  } catch (error) {
    logger.log(error);
  }
}

async function get(key) {
  try {
    const item = await AsyncStorage.getItem(prefix + key);
    const parsedItem = JSON.parse(item);

    // Item not in cache
    if (!parsedItem) return null;

    // Item is expired
    if (isExpired(parsedItem)) {
      await AsyncStorage.removeItem(prefix + key);
    }

    return parsedItem.value;
  } catch (error) {
    logger.log(error);
  }
}

function isExpired(item) {
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);
  return now.diff(storedTime, 'day') > expiryInDays;
}

export default { get, store, purge: AsyncStorage.clear };
