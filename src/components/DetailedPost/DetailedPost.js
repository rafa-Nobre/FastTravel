import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

const DetailedPost = ({postData}) => {
  return (
    <ScrollView>
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

        <Text style={styles.longDescription}>{postData.description}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailedPost;
