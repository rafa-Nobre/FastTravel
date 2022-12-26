import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#ffffff',
    width: 200,
    height: 40,
    marginTop: 25,
    marginLeft: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width - 20,
    height: 60,
    marginHorizontal: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    elevation: 2,
    zIndex: 100,
    backgroundColor: '#ffffff',
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
