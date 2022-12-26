import {StatusBar, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/screens/Home/HomeScreen';
import Post from './src/components/Post/Post';

const App = () => {
  return (
    <>
      <Post />
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
