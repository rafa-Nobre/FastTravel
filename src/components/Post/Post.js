import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />

      <Text style={styles.headerText}>1 bed 1 bedroom</Text>

      <Text numberOfLines={2} style={styles.description}>
        Buhuah guahughauhgauh guuhgauhahg uahu aughau ghu aghuahguahguah
        guahusgh aughu aghua hgusgh auhga uhgauha ughauh
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrices}>$36</Text>
        <Text style={styles.newPrices}> $30 </Text>/ text
      </Text>

      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
