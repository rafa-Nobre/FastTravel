import {StatusBar, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/screens/Home/HomeScreen';

const App = () => {
  return (
    <>
      <HomeScreen />
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
