import { useQuery } from 'react-query';
import { getPastLaunches } from '../api/spacex';

export default function usePastLaunches(query: string) {
  return useQuery('pastLaunch', () => getPastLaunches(), {
    select: (launch) => launch.filter((l) => l.name.toLowerCase().includes(query?.toLowerCase())),
  });
}
