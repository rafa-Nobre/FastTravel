import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearchScreen from '../screens/DestinationSearch/DestinationSearchScreen';
import GuestsScreen from '../screens/Guests/GuestsScreen';
import HomeTabNavigator from './HomeTabNavigator';
import PostScreen from '../screens/PostScreen/PostScreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchScreen}
          options={{
            title: 'Search your destination',
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name={'Guests'}
          component={GuestsScreen}
          options={{
            title: 'How many people?',
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name={'Post'}
          component={PostScreen}
          options={{
            title: 'Accommodation',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
