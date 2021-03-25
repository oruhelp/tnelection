import * as React from 'react';
import {View, Linking, Image} from 'react-native';
import {Text, DataTable} from 'react-native-paper';
import {
  getAllianceDetails,
  getCandidateDetails,
  getTotalSeatsOfParty,
} from '../../services/Utils';
import {useSelector} from 'react-redux';

const About = (props) => {
  const {id, alliance, seats, profile, voteImg} = props;
  const masterData = useSelector((state) => state.masterData);
  const allianceDetails = masterData.alliance[alliance];

  return (
    <View>
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell>Alliance</DataTable.Cell>
          <DataTable.Cell numeric>{allianceDetails?.name}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Seats Allotment</DataTable.Cell>
          {seats ? (
            <DataTable.Cell numeric>{seats}</DataTable.Cell>
          ) : (
            <DataTable.Cell numeric>-</DataTable.Cell>
          )}
        </DataTable.Row>

        <DataTable.Row style={{height:100}}>
          <DataTable.Cell>Symbol</DataTable.Cell>
          {voteImg ? (
            <DataTable.Cell numeric >
              <View>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                  backgroundColor:'white'
                }}
                source={{
                  uri: voteImg,
                }}
              />
              </View>
            </DataTable.Cell>
          ) : (
            <DataTable.Cell numeric>-</DataTable.Cell>
          )}
        </DataTable.Row>

        {profile &&
          profile.map((_row) => (
            <DataTable.Row key={_row.header}>
              <DataTable.Cell>{_row.header}</DataTable.Cell>
              <DataTable.Cell numeric>
                {_row.header === 'Website' ? (
                  <Text
                    style={{color: 'blue'}}
                    onPress={() => Linking.openURL(_row.value)}>
                    {_row.value}
                  </Text>
                ) : (
                  _row.value
                )}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
      </DataTable>
    </View>
  );
};
export default About;
