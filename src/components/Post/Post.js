import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Post = ({postData}) => {
  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: postData.id});
  };

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      <Image
        source={{
          uri: postData.image,
        }}
        style={styles.image}
      />

      <Text style={styles.bedrooms}>
        {postData.bed} bed {postData.bedroom} bedroom
      </Text>

      <Text numberOfLines={2} style={styles.description}>
        {postData.type}, {postData.title}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrices}>${postData.oldPrice}</Text>
        <Text style={styles.newPrices}> ${postData.newPrice} </Text>/ night
      </Text>

      <Text style={styles.totalPrice}>${postData.totalPrice} total</Text>
    </Pressable>
  );
};

export default Post;
