import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PlaceholderImage from '../../../components/PlaceholderImage';

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

const CompactLaunchWidget = ({
  flightNumber,
  rocketName,
  missionName,
  missionImage,
  launchTime,
  upcoming,
  youtubeId,
  launchTimeUnix,
}: ComponentProps) => {
  const navigation = useNavigation();

  const viewLaunchDetails = () => {
    navigation.navigate('LaunchDetails', {
      flightName: flightNumber,
      missionImage,
      launchTime,
      upcoming,
      missionName,
      youtubeId,
      launchTimeUnix,
    });
  };

  return (
    <TouchableOpacity style={styles.bodyContainer} onPress={viewLaunchDetails}>
      {missionImage ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: missionImage }} style={styles.missionImage} />
        </View>
      ) : (
        <View style={styles.imageContainer}>
          <PlaceholderImage />
        </View>
      )}
      <View style={styles.body}>
        <Text style={styles.flightNumberText}>Flight {flightNumber}</Text>
        <Text style={styles.missionNameText}>{missionName}</Text>
        <Text style={styles.launchTimeText}>{launchTime}</Text>
      </View>
      <Text style={styles.rocketNameText}>{rocketName}</Text>
    </TouchableOpacity>
  );
};

export default CompactLaunchWidget;

const styles = StyleSheet.create({
  headerContainer: { marginBottom: 20 },
  header: { fontSize: 28, fontWeight: '600' },
  bodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  imageContainer: { justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  missionImage: { height: 40, width: 40 },
  body: { height: 70, justifyContent: 'space-between', flex: 3 },
  flightNumberText: { color: '#bbb', fontSize: 12 },
  missionNameText: { fontSize: 24, fontWeight: '600' },
  launchTimeText: { fontSize: 12 },
  rocketNameText: { color: '#bbb', fontSize: 12 },
});
