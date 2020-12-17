import client from './client';
import { leagueId } from '../config/constants';

const endPoint = `teams/league/${leagueId}`;

function getTeams() {
  return client.get(endPoint);
}

export default {
  getTeams,
};
