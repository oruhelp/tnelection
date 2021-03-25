import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Pie from 'react-native-pie';
import {Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {DataTable} from 'react-native-paper';

const colors = [
  '#808000',
  '#800000',
  '#008080',
  '#800080',
  '#808080',
  '#808000',
  '#800000',
  '#008080',
  '#800080',
  '#808080',
  '#808000',
  '#800000',
  '#008080',
  '#800080',
  '#808080',
  '#808000',
  '#800000',
  '#008080',
  '#800080',
  '#808080',
];

export default () => {
  const masterData = useSelector((state) => state.masterData);
  const navigation = useNavigation();

  const getPieData = () => {
    if (!masterData) return [];
    const alliances = [
      ...new Set(masterData.parties.map((item) => item.alliance)),
    ];
    let count = 0;
    let returnRes = alliances
      .map((_alliance, index) => {
        if (!_alliance) return;
        return masterData.parties
          .filter((_party) => _party.alliance === _alliance)
          .reduce(
            (tot, x) => {
              if (x.liveScore && x.liveScore.won) {
                if (
                  parseInt(x.liveScore.won) &&
                  parseInt(x.liveScore.won) !== NaN
                ) {
                  tot.won = tot.won + parseInt(x.liveScore.won);
                }
              }

              if (x.liveScore && x.liveScore.leading) {
                if (
                  parseInt(x.liveScore.leading) &&
                  parseInt(x.liveScore.leading) !== NaN
                ) {
                  tot.leading = tot.leading + parseInt(x.liveScore.leading);
                }
              }
              const allianceDetails = masterData.alliance[_alliance];
              if (allianceDetails) {
                tot.name = allianceDetails.name;
              }
              return tot;
            },
            {won: 0, leading: 0},
          );
      })
      .filter((x) => x !== undefined);

    // ----
    const partiesData = masterData.parties
      .filter((_party) => _party.alliance === undefined)
      .map((_party) => {
        const retData = {
          name: _party.name,
          won: 0,
          leading: 0,
        };
        if (_party.liveScore && _party.liveScore.won) {
          if (
            parseInt(_party.liveScore.won) &&
            parseInt(_party.liveScore.won) !== NaN
          ) {
            retData.won = parseInt(_party.liveScore.won);
          }
        }

        if (_party.liveScore && _party.liveScore.leading) {
          if (
            parseInt(_party.liveScore.leading) &&
            parseInt(_party.liveScore.leading) !== NaN
          ) {
            retData.leading = parseInt(_party.liveScore.leading);
          }
        }
        return retData;
      });
    // ----

    const retRes = returnRes.concat(partiesData);

    return retRes.map((_row, index) => ({..._row, color: colors[index]}));
  };
  const pieData = getPieData();

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Dashboard" />
      </Appbar.Header>
      <View style={styles.container}>
        <View
          style={{
            paddingVertical: 15,
            flexDirection: 'row',
            width: 350,
            justifyContent: 'space-between',
          }}>
          <View style={{width: 175, alignItems: 'center'}}>
            <Pie
              radius={80}
              innerRadius={50}
              sections={pieData.map((_data) => ({
                color: _data.color,
                percentage: _data.won / 2.34,
              }))}
              backgroundColor="#ddd"
            />
            <View style={styles.gauge}>
              <Text style={styles.gaugeText}>Won</Text>
            </View>
          </View>
          <View style={{width: 175, alignItems: 'center'}}>
            <Pie
              radius={80}
              innerRadius={50}
              sections={pieData.map((_data) => ({
                color: _data.color,
                percentage: _data.leading / 2.34,
              }))}
              backgroundColor="#ddd"
            />
            <View style={styles.gauge}>
              <Text style={styles.gaugeText}>Leading</Text>
            </View>
          </View>
        </View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Color</DataTable.Title>
            <DataTable.Title>Party/Alliance</DataTable.Title>
            <DataTable.Title numeric>Won</DataTable.Title>
            <DataTable.Title numeric>Leading</DataTable.Title>
          </DataTable.Header>

          {pieData &&
            pieData.map((_row) => {
              if (_row.won && _row.leading)
                return (
                  <DataTable.Row key={_row.name}>
                    <DataTable.Cell>
                      <Text style={{backgroundColor: _row.color}}>
                        {'       '}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell>{_row.name}</DataTable.Cell>
                    <DataTable.Cell numeric>{_row.won}</DataTable.Cell>
                    <DataTable.Cell numeric>{_row.leading}</DataTable.Cell>
                  </DataTable.Row>
                );
            })}
        </DataTable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
});
