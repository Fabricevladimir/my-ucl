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
apiClient.get = async function (url, params, axiosConfig) {
  // Check if in cache
  const data = await cache.get(url);
  if (data) {
    logger.log('CACHED DATA');
    return { ok: true, data };
  }

  // Not in cache
  const response = await get(url, params, axiosConfig);
  logger.log('NEW REQUEST MADE');

  // Add to cache and return response
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }
};

export default apiClient;
