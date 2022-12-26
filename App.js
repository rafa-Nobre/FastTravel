import 'react-native-gesture-handler';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Router from './src/routes/Router';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const App = () => {
  return (
    <>
      {/* <Post postData={dataSample} /> */}
      <Router />
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
