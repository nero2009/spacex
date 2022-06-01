import { useQuery } from 'react-query';

import { getUpcomingLaunches } from '../api/spacex';

export default function useUpcomingLaunches(query: string) {
  return useQuery('upcomingLaunches', () => getUpcomingLaunches(), {
    select: (launch) => launch.filter((l) => l.name.toLowerCase().includes(query?.toLowerCase())),
  });
}
