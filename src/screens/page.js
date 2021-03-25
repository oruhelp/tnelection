import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';

const Page = ({route}) => {
  const navigation = useNavigation();
  const children = route?.params?.children;

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
      </Appbar.Header>
      {children}
    </View>
  );
};
export default Page;
