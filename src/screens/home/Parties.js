import * as React from 'react';
import {View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import {
  Appbar,
  Text,
  List,
  Subheading,
  Headline,
  Title,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import ListItem from '../../components/ListItem';
import {getCountAsText} from '../../services/Utils';

export default function () {
  const navigation = useNavigation();
  const masterData = useSelector((state) => state.masterData);

  const alliences = [
    ...new Set(masterData.parties.map((item) => item.alliance)),
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#ff408110'}}>
      <View>
        <Appbar.Header>
          <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
          <Appbar.Content title="Parties" />
          <Appbar.Action
            icon="magnify"
            onPress={() =>
              navigation.navigate('Search', {
                page: 'Party',
              })
            }
          />
        </Appbar.Header>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <Headline style={{alignSelf: 'center', marginTop: 10}}>
            Parties/Alliance
          </Headline>

          {alliences
            .sort(function (a, b) {
              if (a < b) {
                return -1;
              }
              if (a > b) {
                return 1;
              }
              return 0;
            })
            .map((_allience) => {
              const parties = masterData.parties.filter(
                (item) => item.alliance === _allience,
              );
              if (_allience) {
                return (
                  <ListItem
                    key={_allience}
                    title={masterData.alliance[_allience].name}
                    image={masterData.alliance[_allience].image}
                    seats={masterData.alliance[_allience].seats}
                    chips={
                      masterData.alliance[_allience] &&
                      masterData.alliance[_allience].chips &&
                      Object.keys(masterData.alliance[_allience].chips).map(
                        (key) => ({
                          ...masterData.alliance[_allience].chips[key],
                        }),
                      )
                    }
                    liveScore={masterData.alliance[_allience].liveScore}
                    onPress={() =>
                      navigation.navigate('Alliance', {
                        id: _allience,
                      })
                    }
                  />
                );
              }
            })}
          {['p20'].map((partyId) => {
            const _party = masterData.parties.filter(
              (party) => party.id === partyId,
            )[0];
            return (
              <ListItem
                key={_party.id}
                title={_party.name}
                image={_party.symbol}
                chips={
                  _party &&
                  _party.chips &&
                  Object.keys(_party.chips).map((key) => ({
                    ..._party.chips[key],
                  }))
                }
                seats={_party.seats}
                liveScore={_party.liveScore}
                onPress={() =>
                  navigation.navigate('Party', {
                    id: _party.id,
                  })
                }
              />
            );
          })}

          <Headline style={{alignSelf: 'center', marginTop: 10}}>
            All Parties
          </Headline>
          <View>
            <FlatList
              data={masterData.parties.sort((a, b) =>
                a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
              )}
              renderItem={({item}) => {
                const likes = item.likes && {
                  title: getCountAsText(item.likes),
                  icon: 'thumb-up',
                };
                const oldChips =
                  item && item.chips
                    ? Object.keys(item.chips).map((key) => ({
                        ...item.chips[key],
                      }))
                    : [];
                return (
                  <ListItem
                    key={item.id}
                    title={item.name}
                    image={item.symbol}
                    seats={item.seats}
                    chips={[{...likes}, ...oldChips]}
                    liveScore={item.liveScore}
                    onPress={() =>
                      navigation.navigate('Party', {
                        id: item.id,
                      })
                    }
                  />
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
