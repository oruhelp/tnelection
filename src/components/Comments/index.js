import React from 'react';
import {View, Text, FlatList} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    comment: 'First hardcoded commennt',
    date: '',
    owner: '',
    likes: 10,
    replies: 10,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    comment: 'second hardcoded commennt',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    comment: 'third hardcoded commennt',
  },
];

const Comments = () => {
  const renderItem = ({item}) => (
    <View style={{borderBottomWidth: 1, margin: 5, paddingBottom: 5}}>
      <Text>{item.comment}</Text>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default Comments;
