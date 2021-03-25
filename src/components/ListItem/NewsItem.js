import * as React from 'react';
import {View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import {HelperText, Headline, Chip} from 'react-native-paper';

const NewsItem = (props) => {
  const {image, title, subtitle, chips, onPress} = props;

// const onPress = () => {
//     console.log(op)
//     if(!op) return;
// Linking.openURL(op);
// };

  return (
    <View
      style={{
        margin: 8,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 5,
      }}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            minHeight: 75,
            margin: 5,
          }}>
          {image ? (
            <Image
              style={{
                width: 75,
                height: 75,
                marginRight: 5,
                padding: 4,
                alignSelf: 'center',
                resizeMode: 'contain',
              }}
              source={{
                uri: image,
              }}
            />
          ) : (
            <View />
          )}
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
            }}>
            {title && (
              <View
                style={{
                  marginHorizontal: 5,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}>
                <Text
                  style={{
                    flexWrap: 'wrap',
                    marginLeft: 8,
                    marginTop: 15,
                    fontSize: 20,
                  }}>
                  {title}
                </Text>
              </View>
            )}
            {subtitle && (
              <View
                style={{
                  marginHorizontal: 5,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}>
                <Text
                  style={{
                    flexWrap: 'wrap',
                    marginLeft: 8,
                    fontSize: 14,
                  }}>
                  {subtitle}
                </Text>
              </View>
            )}
            <View
              style={{
                flexDirection: 'row',
                padding: 0,
                margin: 5,
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
              }}>
              {chips &&
                chips.map(
                  (_chip) =>
                    _chip.title && (
                      <Chip
                        key={_chip.title}
                        icon={_chip.icon}
                        style={{
                          backgroundColor: _chip.color || '#eee',
                          margin: 2,
                        }}>
                        {_chip.title}
                      </Chip>
                    ),
                )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default NewsItem;
