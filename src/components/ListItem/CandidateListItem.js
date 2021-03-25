import * as React from 'react';
import {View, Image, Text} from 'react-native';
import {Subheading, TouchableRipple, Chip} from 'react-native-paper';

const CandidateListItem = (props) => {
  const {
    id,
    name,
    image,
    leader,
    constituency,
    likes,
    comments,
    onPress,
  } = props;


  return (
    <View
      style={{
        margin: 8,
        backgroundColor: '#dddddd',
        borderRadius: 5,
      }}>
      <TouchableRipple onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
          }}
          onPress={onPress}>
          {image ? (
            <Image
              style={{
                width: 100,
                height: 100,
                marginRight: 5,
                resizeMode: 'contain',
              }}
              source={{
                uri: image,
              }}
            />
          ) : (
            <Image
              style={{
                width: 75,
                height: 75,
                marginRight: 5,
              }}
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/75px-No_image_available.svg.png',
              }}
            />
          )}
          <View style={{flex: 1}}>
            <Subheading style={{flex: 1, flexWrap: 'wrap'}}>{name}</Subheading>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {leader && (
                <Chip
                  icon="crown"
                  style={{
                    backgroundColor: '#F0F8FF',
                    margin: 2,
                  }}>
                  Leader
                </Chip>
              )}
              {likes && (
                <Chip
                  icon="thumb-up"
                  style={{
                    backgroundColor: '#F0F8FF',
                    margin: 2,
                  }}>
                  {likes}
                </Chip>
              )}
              {comments && (
                <Chip
                  icon="comment"
                  style={{
                    backgroundColor: '#F0F8FF',
                    margin: 2,
                  }}>
                  {comments}
                </Chip>
              )}
            </View>
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
};
export default CandidateListItem;
