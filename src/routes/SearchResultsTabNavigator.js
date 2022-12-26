import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResults/SearchResultsScreen';
import SearchResultsMap from '../screens/SearchResultsMap/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'List'} component={SearchResultsScreen} />
      <Tab.Screen name={'Map'} component={SearchResultsMap} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
