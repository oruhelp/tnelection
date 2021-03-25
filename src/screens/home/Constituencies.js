import * as React from 'react';
import {View, SafeAreaView, ScrollView, SectionList} from 'react-native';
import {Appbar, Headline} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ListItem from '../../components/ListItem';
import {getCountAsText} from '../../services/Utils';

const Constituencies = (props) => {
  const masterData = useSelector((state) => state.masterData);
  const navigation = useNavigation();

  const candidates = masterData.candidates;

  const districts = [
    ...new Set(masterData.constituencies.map((item) => item.dt)),
  ];

  const getData = () => {
    return districts
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
      .map((_district) => {
        const districtData = {title: _district};

        districtData.data = masterData.constituencies
          .filter((_comstituency) => _comstituency.dt === _district)
          .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
          .map((_const) => {
            const likes = _const.likes && {
              title: getCountAsText(_const.likes),
              icon: 'thumb-up',
            };
            const comments = _const.comments && {
              title: getCountAsText(_const.comments),
              icon: 'comment',
            };

            return {
              id: _const.id,
              name: _const.name,
              image: _const.image,
              subtitle: _const.subtitle,
              chips: _const &&
                _const.chips && [
                  {...likes},
                  {...comments},
                  ...Object.keys(_const.chips).map((key) => ({
                    ..._const.chips[key],
                  })),
                ],
            };
          });
        return districtData;
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ff408110'}}>
      <View>
        <Appbar.Header>
          <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
          <Appbar.Content title="Constituencies" />
          <Appbar.Action
            icon="magnify"
            onPress={() =>
              navigation.navigate('Search', {
                page: 'Constituencies',
              })
            }
          />
        </Appbar.Header>
      </View>
      <SectionList
        sections={getData()}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <ListItem
            key={item.id}
            title={item.name}
            image={item.image}
            subtitle={item.subtitle}
            chips={item.chips}
            onPress={() =>
              navigation.navigate('Constituency', {
                id: item.id,
              })
            }
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <Headline style={{alignSelf: 'center', marginTop: 30}}>
            {title}
          </Headline>
        )}
      />
    </View>
  );
};
export default Constituencies;
