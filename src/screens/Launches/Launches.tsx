import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View, Text } from 'react-native';

import PastLaunches from './PastLaunches';
import UpcomingLaunches from './UpcomingLaunches';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="UpcomingLaunches"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { width: '100%' },
      }}>
      <Tab.Screen
        name="PastLaunches"
        component={PastLaunches}
        options={{ tabBarLabel: 'Past Launches' }}
      />
      <Tab.Screen
        name="UpcomingLaunches"
        component={UpcomingLaunches}
        options={{ tabBarLabel: 'Upcoming Launches' }}
      />
    </Tab.Navigator>
  );
}

const Launches = () => {
  return (
    <View style={{ flex: 1 }}>
      <MyTabs />
    </View>
  );
};

export default Launches;
