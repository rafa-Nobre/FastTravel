import React from 'react';
import {View, Text} from 'react-native';
import DetailedPost from '../../components/DetailedPost/DetailedPost';
import {useRoute} from '@react-navigation/native';

import dataSample from '../../../assets/data/feed';

const PostScreen = () => {
  const route = useRoute();

  const postSample = dataSample.find(place => place.id === route.params.postId);

  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailedPost postData={postSample} />
    </View>
  );
};

export default PostScreen;
