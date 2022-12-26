import {useState} from 'react';
import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SugestionRow from './SuggestionRow';
import styles from './styles';

const DestinationSearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        query={{
          key: 'AIzaSyAOHxMe55LcDCs84k3Mjq4ujkr6jzFaLiA',
          language: 'en',
          type: '(cities)',
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        suppressDefaultStyles
        renderRow={item => <SugestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
