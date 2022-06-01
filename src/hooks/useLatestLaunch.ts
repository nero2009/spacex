import { useQuery } from 'react-query';

import { getLatestLaunch } from '../api/spacex';

export default function useLatestLaunch() {
  return useQuery('latestLaunches', () => getLatestLaunch());
}
