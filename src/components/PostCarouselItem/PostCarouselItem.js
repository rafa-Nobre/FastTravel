import {View, Text, Image, Pressable, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const PostCarouselItem = ({postData}) => {
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: postData.id});
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: postData.image,
          }}
          style={styles.image}
        />

        <View style={{flex: 1, marginHorizontal: 5}}>
          <Text style={styles.bedrooms}>
            {postData.bed} bed {postData.bedroom} bedroom
          </Text>

          <Text numberOfLines={2} style={styles.description}>
            {postData.type}, {postData.title}
          </Text>

          <Text style={styles.prices}>
            <Text style={styles.newPrices}>${postData.newPrice} </Text>/ night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarouselItem;
