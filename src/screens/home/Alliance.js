import * as React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
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
import PartyItem from '../../components/ListItem/PartyItem';
import {dynamicData} from '../../constants/dynamicData';
import {getCountAsText} from '../../services/Utils';
import ListItem from '../../components/ListItem';

export default function ({route}) {
  const {id} = route?.params;
  const navigation = useNavigation();
  const masterData = useSelector((state) => state.masterData);

  const parties = masterData.parties.filter((item) => item.alliance === id);
  return (
    <View style={{flex: 1, backgroundColor: '#ff408110'}}>
      <View>
        <Appbar.Header>
          <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
          <Appbar.Content title="Alliance" />
        </Appbar.Header>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          {parties
          .sort((a, b) => (parseInt(a.seats) < parseInt(b.seats) ? 1 : parseInt(a.seats) > parseInt(b.seats) ? -1 : 0))
          .map((_party) => (
            <ListItem
              key={_party.name}
              title={_party.name}
              image={_party.symbol}
              seats={_party.seats}
              chips={
                _party &&
                _party.chips &&
                Object.keys(_party.chips).map((key) => ({
                  ..._party.chips[key],
                }))
              }
              liveScore={_party.liveScore}
              onPress={() =>
                navigation.navigate('Party', {
                  id: _party.id,
                })
              }
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
