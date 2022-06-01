import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import PlaceholderImage from '../../components/PlaceholderImage';
import { YOUTUBE_URL } from '../../constants';
import useCountdownToLaunch from '../../hooks/useCountdownToLaunch';
import { AppStackParamList } from '../../router';
import { toDaysMinutesSeconds } from '../../utils';

type Props = NativeStackScreenProps<AppStackParamList, 'LaunchDetails'>;

const LaunchDetails = ({ route }: Props) => {
  const { upcoming, missionImage, missionName, launchTime, flightName, youtubeId, launchTimeUnix } =
    route.params;

  const { timeToLaunch } = useCountdownToLaunch(launchTimeUnix);

  const viewLaunch = async () => {
    Linking.canOpenURL(`${YOUTUBE_URL}${youtubeId}`).then((supported) => {
      if (supported) {
        Linking.openURL(`${YOUTUBE_URL}${youtubeId}`);
      } else {
        console.log(`Don't know how to open URI:  ${YOUTUBE_URL}${youtubeId}`);
      }
    });
  };

  return (
    <View style={styles.container}>
      {upcoming ? (
        <Text style={styles.launchTimeText}>{toDaysMinutesSeconds(timeToLaunch)}</Text>
      ) : null}
      <View style={styles.body}>
        {missionImage ? (
          <View style={styles.imageContainer}>
            <Image source={{ uri: missionImage }} style={styles.image} />
          </View>
        ) : (
          <View style={styles.imageContainer}>
            <PlaceholderImage />
          </View>
        )}
        <View style={styles.launchDetailsContainer}>
          <Text style={styles.flightName}>Flight {flightName}</Text>
          <Text style={styles.missionName}>{missionName}</Text>
          <Text style={styles.launchTime}>{launchTime}</Text>
        </View>
      </View>
      {!upcoming ? (
        <View style={styles.buttonContainer}>
          <Button title="Watch Launch" onPress={viewLaunch} />
        </View>
      ) : null}
    </View>
  );
};

export default LaunchDetails;

const styles = StyleSheet.create({
  container: { width: '100%', flex: 1, paddingHorizontal: 10, paddingVertical: 10 },
  launchTimeText: { textAlign: 'center', color: 'green', fontSize: 24 },
  buttonContainer: { justifyContent: 'center', alignItems: 'center' },
  body: { width: '100%', flexDirection: 'row', marginVertical: 10 },
  image: { height: 40, width: 40 },
  imageContainer: { justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  launchDetailsContainer: { height: 70, justifyContent: 'space-between', flex: 3 },
  flightName: { color: '#bbb', fontSize: 12 },
  missionName: { fontSize: 24, fontWeight: '600' },
  launchTime: { fontSize: 12 },
  rocketName: { color: '#bbb', fontSize: 12 },
});
