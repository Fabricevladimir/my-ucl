import client from './client';
import { leagueId } from '../config/constants';

const endPoint = `leagueTable/${leagueId}`;

function getStandings(...args) {
  args[0] = endPoint;
  return client.get(...args);
}

export default {
  getStandings,
};
