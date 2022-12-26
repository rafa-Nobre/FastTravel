import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';

// import { Container } from './styles';

const CustomMarker = ({coordinate, price, onPress, isSelected}) => {
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? 'black' : 'white',
          padding: 5,
          borderRadius: 10,
          borderColor: 'gray',
          borderWidth: 1,
        }}>
        <Text
          style={{color: isSelected ? 'white' : 'black', fontWeight: 'bold'}}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
