import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {DataTable} from 'react-native-paper';
import {useSelector} from 'react-redux';

export default () => {
  const {affidavit} = useSelector((state) => state.masterData.dashboard);

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}>
        <View style={{alignItems: 'center', marginBottom: 25}}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#DBE7F6',
              borderWidth: 2,
              borderColor: '#3e7ecf',
              elevation: 7,
              borderRadius: 50,
              margin: 20,
              marginBottom: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#3e7ecf'}}>
              {affidavit.applied}
            </Text>
          </View>
          <Text>Applied</Text>
        </View>
        <View style={{alignItems: 'center', marginBottom: 25}}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#A6F0AB',
              borderWidth: 2,
              borderColor: '#21c42c',
              elevation: 7,
              borderRadius: 50,
              margin: 20,
              marginBottom: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#21c42c'}}>
              {affidavit.accepted}
            </Text>
          </View>
          <Text>Accepted</Text>
        </View>
        <View style={{alignItems: 'center', marginBottom: 25}}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#ffa2a2',
              borderWidth: 2,
              borderColor: '#ff3a3a',
              elevation: 7,
              borderRadius: 50,
              margin: 20,
              marginBottom: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#ff3a3a'}}>
              {affidavit.rejected}
            </Text>
          </View>
          <Text>Rejected</Text>
        </View>
        <View style={{alignItems: 'center', marginBottom: 25}}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#FDD4B4',
              borderWidth: 2,
              borderColor: '#f97c1b',
              elevation: 7,
              borderRadius: 50,
              margin: 20,
              marginBottom: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#f97c1b'}}>
              {affidavit.withdrawn}
            </Text>
          </View>
          <Text>Withdrawn</Text>
        </View>

        <View style={{alignItems: 'center', marginBottom: 25}}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#A4CAFA',
              borderWidth: 2,
              borderColor: '#0c6ae1',
              elevation: 7,
              borderRadius: 50,
              margin: 20,
              marginBottom: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#0c6ae1'}}>
              {affidavit.contesting}
            </Text>
          </View>
          <Text>Contesting</Text>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          marginHorizontal: 30,
          marginVertical: 20,
          borderColor: '#f50057',
        }}></View>
      <DataTable style={{marginBottom: 100}}>
        <DataTable.Row>
          <DataTable.Cell>Date for Nominations</DataTable.Cell>
          <DataTable.Cell numeric>12 March 2021</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Last Date for Nominations</DataTable.Cell>
          <DataTable.Cell numeric>19 March 2021</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Scrutiny of nominations</DataTable.Cell>
          <DataTable.Cell numeric>20 March 2021</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            Last date for withdrawal
          </DataTable.Cell>
          <DataTable.Cell numeric>22 March 2021</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Date of poll</DataTable.Cell>
          <DataTable.Cell numeric>6 April 2021</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Date of counting</DataTable.Cell>
          <DataTable.Cell numeric>2 May 2021</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            Complete election before
          </DataTable.Cell>
          <DataTable.Cell numeric>24 May 2021</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </ScrollView>
  );
};
