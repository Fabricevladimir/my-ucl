/**
 * This file sets up the client network api with appropriate
 * headers and cache opperations
 */

import { create } from 'apisauce';

import cache from '../utils/cache';
import logger from '../utils/logger';
import settings from '../config/settings';

import key from '../../key';

const apiClient = create({
  baseURL: settings.apiUrl,

  // TODO: replace with appropriate key
  // headers: { 'X-RapidAPI-Key': settings.apiKey },
  headers: { 'X-RapidAPI-Key': key },
});

const get = apiClient.get;
/**
 * To minimize api calls, the cache is first consulted.
 * If the value is in the cache and up to date, the value
 * is retrieved from the cache. New and updated data
 * are stored in the cache.
 */
apiClient.get = async function (url, params, config) {
  // if force update - get and Cache
  if (config.forceUpdate) {
    logger.log('REFRESHING ->');
    return await getAndCache(url, params, config);
  }

  // not force update - get from cache
  const data = await cache.get(url);
  if (data) {
    logger.log('CACHED DATA');
    return { ok: true, data };
  }

  return await getAndCache(url, params, config);
};

async function getAndCache(url, params, config) {
  const response = await get(url, params, config);
  logger.log('NEW REQUEST');

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }
}

export default apiClient;
