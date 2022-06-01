import React, { useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import useUpcomingLaunches from '../../hooks/useUpcomingLaunches';
import { Launch } from '../../types';
import CompactLaunchWidget from './components/CompactLaunchWidget';
import SearchBar from './components/SearchBar';

const UpcomingLaunches = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchInputClicked, setSearchInputClicked] = useState(false);
  const { data: upcomingLaunchesData, isLoading } = useUpcomingLaunches(searchQuery);

  const renderItem = ({ item }: { item: Launch }) => {
    return (
      <CompactLaunchWidget
        flightNumber={item.flight_number}
        missionName={item.name}
        missionImage={item.links.patch.small}
        launchTime={item.date_utc}
        upcoming={item.upcoming}
        youtubeId={item.links.youtube_id}
        launchTimeUnix={item.date_unix}
      />
    );
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#333" />;
  }

  return (
    <View style={styles.container}>
      <SearchBar
        isSearchInputClicked={isSearchInputClicked}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSearchInputClicked={setSearchInputClicked}
      />
      <FlatList data={upcomingLaunchesData} renderItem={renderItem} style={styles.listContainer} />
    </View>
  );
};

export default UpcomingLaunches;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
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
