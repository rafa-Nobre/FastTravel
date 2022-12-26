import {StatusBar, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
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
