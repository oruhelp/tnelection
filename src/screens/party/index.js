import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import {Headline} from 'react-native-paper';
import {StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import About from './About';
import Comments from '../../components/Comments';
import Candidates from './Candidates';

const Party = ({route, navigation}) => {
  const {id} = route?.params;
  const masterData = useSelector((state) => state.masterData);
  const details = masterData.parties.filter((_party) => _party.id === id)[0];

  const initialLayout = {width: Dimensions.get('window').width};
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'candidates', icon: 'account-group'},
    {key: 'about', icon: 'information-outline'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'about':
        return <About {...details} />;
      case 'candidates':
        return <Candidates {...details} />;
      case 'comments':
        return <Comments />;
      default:
        return null;
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#3f51b5', alignItems: 'center'}}>
      <Icon
          style={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 20, position:'absolute'}}
          name={'arrow-left'}
          size={25}
          color={'#fff'}
          onPress={() => navigation.goBack()}
        />
        <Image
          style={{
            width: 100,
            height: 100,
            marginTop: 20,
            borderWidth: 4,
            borderColor: '#eee',
            backgroundColor: '#fff',
            borderRadius: 100,
          }}
          source={{
            uri:
              details.symbol ||
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/75px-No_image_available.svg.png',
          }}
        />

        <Headline style={{margin: 10, color: '#fff', textAlign:'center'}}>
          {details.name}
        </Headline>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: '#f50057'}}
            renderIcon={(props) => (
              <Icon name={props.route.icon} size={25} color={'#c51162'} />
            )}
            style={{backgroundColor: '#7986cb'}}
          />
        )}
        initialLayout={initialLayout}
      />
    </View>
  );
};
export default Party;
