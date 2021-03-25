import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Pie from 'react-native-pie';
import {Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {DataTable} from 'react-native-paper';
import Counting from './Counting';
import Affidavit from './Affidavit';

export default () => {
  const navigation = useNavigation();
  const masterData = useSelector((state) => state.masterData);

  const {activeDashboard} = masterData;

  const getActiveView = () => {
    if (!activeDashboard) return <Affidavit />;

    return <Counting />;
  };

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Dashboard" />
      </Appbar.Header>
      {getActiveView()}
    </View>
  );
};
