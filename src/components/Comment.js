import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

const Comment = ({
  comment,
  date,
  owner,
  likes,
  liked,
  onLike,
  onDislike,
  canEdit,
  onDelete,
}) => {
  return (
    <View
      style={{
        margin: 8,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 5,
        elevation: 2,
        paddingHorizontal: 8,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <Text style={{flexWrap: 'wrap', overflow: 'hidden', color: '#71637D'}}>
          {owner?.name}
        </Text>
      </View>

      <Text style={{fontSize: 16, fontWeight: '700'}}>{comment}</Text>
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Button
          icon={liked ? 'thumb-up' : 'thumb-up-outline'}
          mode="text"
          color="#71637D"
          onPress={liked ? onDislike : onLike}>
          {likes}
        </Button>
        {canEdit && (
          <Button
            icon={'delete'}
            mode="text"
            color="#71637D"
            onPress={onDelete}>
            Delete
          </Button>
        )}
        <Text style={{color: '#71637D'}}>{date}</Text>
      </View>
    </View>
  );
};
export default Comment;
