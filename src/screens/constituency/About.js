import * as React from 'react';
import {View, Linking} from 'react-native';
import {Text, DataTable} from 'react-native-paper';
import {useSelector} from 'react-redux';

const About = (props) => {
  const {id, dt, profile} = props;
  const masterData = useSelector((state) => state.masterData);


  return (
    <View>
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell>District</DataTable.Cell>
          <DataTable.Cell numeric>{dt}</DataTable.Cell>
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
