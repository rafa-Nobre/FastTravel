import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import HomeScreen from '../screens/Home/HomeScreen';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarActiveTintColor: '#f15454', headerShown: false}}>
      <Tab.Screen
        name={'Explore'}
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            <Fontisto name="search" size={25} />;
          },
        }}
      />

      <Tab.Screen
        name={'Saved'}
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            <FontAwesome name="heart-o" size={25} />;
          },
        }}
      />

      <Tab.Screen
        name={'FastTravel'}
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            <FontAwesome5 name="airbnb" size={25} />;
          },
        }}
      />

      <Tab.Screen
        name={'Messages'}
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            <Feather name="message-square" size={25} />;
          },
        }}
      />

      <Tab.Screen
        name={'Profile'}
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            <EvilIcons name="user" size={25} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
