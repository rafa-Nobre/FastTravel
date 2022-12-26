import 'react-native-gesture-handler';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Router from './src/routes/Router';

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
