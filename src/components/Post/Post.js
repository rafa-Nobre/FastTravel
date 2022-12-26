import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = ({postData}) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default Post;
