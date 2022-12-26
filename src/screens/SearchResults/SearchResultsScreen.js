import {View, Text, FlatList} from 'react-native';
import Post from '../../components/Post/Post';
import styles from './styles';
import feed from '../../../assets/data/feed';

const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post postData={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
