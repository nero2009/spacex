import { useQuery } from 'react-query';

import { getNextLaunch } from '../api/spacex';

export default function useNextLaunch() {
  return useQuery('nextLaunch', () => getNextLaunch());
}
