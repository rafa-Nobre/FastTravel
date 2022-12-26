import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const SugestionRow = ({item}) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name="location-pin" size={30} color={'black'} />
      </View>
      <Text style={styles.locationText}>{item.description}</Text>
    </View>
  );
};

export default SugestionRow;
