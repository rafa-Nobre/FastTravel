import {StatusBar, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/screens/Home/HomeScreen';
import Post from './src/components/Post/Post';
import SearchResultsScreen from './src/screens/SearchResults/SearchResultsScreen';
import DestinationSearchScreen from './src/screens/DestinationSearch/DestinationSearchScreen';
import GuestsScreen from './src/screens/Guests/GuestsScreen';
import feed from './assets/data/feed';

const dataSample = feed[2];

const App = () => {
  return (
    <>
      {/* <Post postData={dataSample} /> */}
      <GuestsScreen />
      <StatusBar barStyle={'default'} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default App;
