import * as React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Subheading, TouchableRipple, Chip} from 'react-native-paper';
import {getAllianceDetails} from '../../services/Utils';

const PartyItem = (props) => {
  const {id, name, symbol, alliance, likes, comments, onPress} = props;
  const allianceDetails = getAllianceDetails(alliance);
  return (
    <View
      style={{
        margin: 8,
        marginVertical: 2,
        backgroundColor: '#fff',
        borderRadius: 5,
      }}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
          }}
          onPress={onPress}>
          {symbol ? (
            <Image
              style={{
                width: 75,
                height: 75,
                marginRight: 5,
                resizeMode: 'contain',
              }}
              source={{
                uri: symbol,
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
            <View style={{marginHorizontal: 5}}>
              <Subheading style={{flex: 1, flexWrap: 'wrap'}}>
                {name}
              </Subheading>
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: 0,
                margin: 5,
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
              }}>
              {allianceDetails && (
                <Chip
                  style={{
                    backgroundColor: allianceDetails.color,
                    margin: 2,
                  }}>
                  {allianceDetails.name}
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
      </TouchableOpacity>
    </View>
  );
};
export default PartyItem;
