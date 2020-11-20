import client from './client';
import { leagueId } from '../config/constants';

const endPoint = `topscorers/${leagueId}`;

function getTopScorers() {
  return client.get(endPoint);
}

export default {
  getTopScorers,
};
