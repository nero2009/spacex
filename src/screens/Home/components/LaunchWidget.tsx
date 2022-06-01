import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PlaceholderImage from '../../../components/PlaceholderImage';
import useCountdownToLaunch from '../../../hooks/useCountdownToLaunch';
import { toDaysMinutesSeconds } from '../../../utils';

type ComponentProps = {
  flightNumber: number;
  rocketName?: string;
  missionName: string;
  missionImage: string;
  youtubeId: string;
  launchTime: string | Date;
  upcoming: boolean;
  launchTimeUnix: number;
};

const LaunchWidget = ({
  flightNumber,
  rocketName,
  missionName,
  missionImage,
  launchTime,
  upcoming,
  launchTimeUnix,
}: ComponentProps) => {
  const { timeToLaunch } = useCountdownToLaunch(launchTimeUnix);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {upcoming ? (
          <Text style={styles.countdown}>{toDaysMinutesSeconds(timeToLaunch)}</Text>
        ) : (
          <Text style={styles.header}>Previous</Text>
        )}
      </View>
      <View style={styles.bodyContainer}>
        {missionImage ? (
          <Image source={{ uri: missionImage }} style={styles.missionImage} />
        ) : (
          <PlaceholderImage />
        )}
        <View style={styles.body}>
          <Text style={styles.flightNumber}>Flight {flightNumber}</Text>
          <Text style={styles.missionNameText}>{missionName}</Text>
          <Text style={styles.launchTimeText}>{launchTime}</Text>
        </View>
        <Text style={styles.rocketNameText}>{rocketName}</Text>
      </View>
    </View>
  );
};

export default LaunchWidget;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#eee',
    shadowOffset: { width: 3, height: 10 },
    shadowRadius: 4,
  },
  headerContainer: { marginBottom: 20 },
  header: { fontSize: 28, fontWeight: '600' },
  bodyContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  countdown: {
    color: 'green',
    fontSize: 32,
    textAlign: 'center',
  },
  missionImage: { height: 50, width: 50 },
  body: { height: 70, justifyContent: 'space-between' },
  flightNumber: { color: '#bbb', fontSize: 12 },
  missionNameText: { fontSize: 24, fontWeight: '600' },
  launchTimeText: { fontSize: 12 },
  rocketNameText: { color: '#bbb', fontSize: 12 },
});
