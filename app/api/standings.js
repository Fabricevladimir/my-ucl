import client from './client';
import { leagueId } from '../config/constants';

const endPoint = `leagueTable/${leagueId}`;

function getStandings() {
  return client.get(endPoint);
}

export default {
  getStandings,
};
