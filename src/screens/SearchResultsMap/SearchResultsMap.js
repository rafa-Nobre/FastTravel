import {useState} from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem/PostCarouselItem';

import dataSample from '../../../assets/data/feed';

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
        style={{width: '100%', height: '100%'}}>
        {dataSample.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>

      <View style={{position: 'absolute', bottom: 40}}>
        <PostCarouselItem postData={dataSample[0]} />
      </View>
    </View>
  );
};

export default SearchResultsMap;
