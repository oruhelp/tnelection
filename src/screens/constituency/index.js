import React from 'react';
import {Text, Image, View, Alert, ScrollView} from 'react-native';
import {Headline, Button} from 'react-native-paper';
import {StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import About from './About';
import Comments from '../../components/Comments';
import Candidates from './Candidates';

import {getCountAsText} from '../../services/Utils';
import {likeConstituency, dislikeConstituency} from '../../services/database';
import {
  constituencyLikedLocal,
  constituencyDislikedLocal,
} from '../../redux/actions/masterDataActions';

const Constituency = ({route, navigation}) => {
  const {id} = route?.params;
  const dispatch = useDispatch();
  const masterData = useSelector((state) => state.masterData);
  const authUser = useSelector((state) => state.authUser);
  const details = masterData.constituencies.filter(
    (constituency) => constituency.id === id,
  )[0];

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

  const [loadingLike, setLoadingLike] = React.useState(false);
  const m_likeConstituency = () => {
    if (!authUser || !authUser.user) {
      Alert.alert('Login', 'Please login to proceed', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.navigate('Login')},
      ]);
    }
    if (loadingLike) return;
    setLoadingLike(true);
    likeConstituency(id)
      .then((res) => {
        dispatch(constituencyLikedLocal(id));
        setLoadingLike(false);
      })
      .catch((err) => {
        setLoadingLike(false);
      });
  };

  const m_dislikeConstituency = () => {
    if (loadingLike) return;
    setLoadingLike(true);
    dislikeConstituency(id)
      .then((res) => {
        dispatch(constituencyDislikedLocal(id));
        setLoadingLike(false);
      })
      .catch((err) => {
        setLoadingLike(false);
      });
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{backgroundColor: '#3f51b5', alignItems: 'center'}}>
        <Icon
          style={{
            alignSelf: 'flex-start',
            marginTop: 20,
            marginLeft: 20,
            position: 'absolute',
          }}
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
              details.image ||
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/75px-No_image_available.svg.png',
          }}
        />

        <Headline style={{marginVertical: 10, color: '#fff'}}>
          {details.name}
        </Headline>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '100%'
          }}>
          {details.liked ? (
            <Button
              icon="thumb-up"
              mode="outline"
              compact
              style={{backgroundColor: 'white', margin: 10}}
              color="#3f51b5"
              onPress={() => m_dislikeConstituency()}>
              {loadingLike ? 'Loading...' : 'Liked'}
            </Button>
          ) : (
            <Button
              icon="thumb-up-outline"
              mode="outline"
              compact
              style={{margin: 10, borderColor: 'white', borderWidth: 1}}
              color="white"
              onPress={() => m_likeConstituency()}>
              {loadingLike ? 'Loading...' : 'Like'}
            </Button>
          )}

          <Text style={{color: 'white'}}>
            {getCountAsText(details.likes)} Likes
          </Text>
        </View>
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
    </ScrollView>
  );
};
export default Constituency;
