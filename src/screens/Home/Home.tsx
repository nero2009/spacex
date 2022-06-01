import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import useLatestLaunch from '../../hooks/useLatestLaunch';
import useNextLaunch from '../../hooks/useNextLaunch';
import LaunchWidget from './components/LaunchWidget';
import NoResultsWidget from './components/NoResultsWidget';

const Home = () => {
  const { data: latestLaunchData, isLoading: isLoadingLatestLaunchData } = useLatestLaunch();
  const { data: nextLaunchData, isLoading: isLoadingNextLaunchData } = useNextLaunch();

  if (isLoadingLatestLaunchData || isLoadingNextLaunchData) {
    return <ActivityIndicator size="large" color="#333" />;
  }
  return (
    <View style={styles.container}>
      {nextLaunchData ? (
        <LaunchWidget
          upcoming={nextLaunchData.upcoming}
          missionImage={nextLaunchData?.links.patch.small}
          flightNumber={nextLaunchData?.flight_number}
          launchTime={nextLaunchData?.date_utc}
          launchTimeUnix={nextLaunchData.date_unix}
          missionName={nextLaunchData.name}
          youtubeId={nextLaunchData.links.youtube_id}
        />
      ) : (
        <NoResultsWidget />
      )}
      {latestLaunchData ? (
        <LaunchWidget
          upcoming={latestLaunchData.upcoming}
          missionImage={latestLaunchData?.links.patch.small}
          flightNumber={latestLaunchData?.flight_number}
          launchTime={latestLaunchData?.date_utc}
          launchTimeUnix={latestLaunchData.date_unix}
          missionName={latestLaunchData.name}
          youtubeId={latestLaunchData.links.youtube_id}
        />
      ) : (
        <NoResultsWidget />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, width: '100%', alignItems: 'center' },
  searchContainer: {
    width: '100%',
    flex: 1,
  },
  listContainer: {
    width: '100%',
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
