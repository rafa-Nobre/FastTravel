import {useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import searchResults from '../../../assets/data/search';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
        style={styles.textInput}
      />

      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} color={'black'} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
