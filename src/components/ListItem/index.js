import * as React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {HelperText, Headline, Chip} from 'react-native-paper';

const ListItem = (props) => {
  const {image, title, subtitle, chips, liveScore, seats, onPress} = props;
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
                    flex: 1,
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
                    flex: 1,
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
          <View style={{alignSelf: 'center', justifyContent: 'center'}}>
          {(!liveScore || (liveScore && !liveScore.leading && !liveScore.trailing)) && seats && (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Headline
                  style={{
                    margin: 5,
                    marginBottom: 0,
                    marginRight: 10,
                    fontWeight: 'bold',
                    color: 'blue',
                  }}>
                  {seats}
                </Headline>

                <HelperText
                  style={{
                    color: 'blue',
                    marginTop: -5,
                  }}>
                  Seats
                </HelperText>
              </View>
            )}
            {liveScore && liveScore.leading && (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Headline
                  style={{
                    margin: 5,
                    marginBottom: 0,
                    marginRight: 10,
                    fontWeight: 'bold',
                    color: 'orange',
                  }}>
                  {liveScore.leading}
                </Headline>

                <HelperText
                  style={{
                    color: 'orange',
                    marginTop: -5,
                  }}>
                  Leading
                </HelperText>
              </View>
            )}
            {liveScore && liveScore.trailing && (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Headline
                  style={{
                    margin: 5,
                    marginBottom: 0,
                    marginRight: 10,
                    fontWeight: 'bold',
                    color: 'orange',
                  }}>
                  {liveScore.trailing}
                </Headline>

                <HelperText
                  style={{
                    color: 'orange',
                    marginTop: -5,
                  }}>
                  Trailing
                </HelperText>
              </View>
            )}
            {liveScore && liveScore.won && (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Headline
                  style={{
                    margin: 5,
                    marginBottom: 0,
                    marginRight: 10,
                    fontWeight: 'bold',
                    color: 'green',
                  }}>
                  {liveScore.won}
                </Headline>

                <HelperText
                  style={{
                    color: 'green',
                    marginTop: -5,
                  }}>
                  Won
                </HelperText>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ListItem;
