import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import Home from './screens/Home/Home';
import LaunchDetails from './screens/LaunchDetails/LaunchDetails';
import Launches from './screens/Launches/Launches';

export type AppTabParamList = {
  Home: undefined;
  Statistics: undefined;
  Launches: undefined;
};
export type AppStackParamList = {
  HomeTab: undefined;
  Statistics: undefined;
  LaunchDetails: {
    flightName: number;
    missionName: string;
    missionImage: string;
    launchTime: Date | string;
    upcoming: boolean;
    rocketName?: string;
    youtubeId: string;
    launchTimeUnix: number;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const Tab = createBottomTabNavigator<AppTabParamList>();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Launches" component={Launches} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeTab">
        <Stack.Screen name="HomeTab" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="LaunchDetails" component={LaunchDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
