import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, Alert, Linking} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import Home from './screens/home';
import HotNews from './screens/hotnews';
import Announcements from './screens/announcements';
import Parties from './screens/home/Parties';
import Constituencies from './screens/home/Constituencies';
import Candidates from './screens/home/Candidates';
import Dashboard from './screens/dashboard';
import {store, persistor} from './redux/store/store';
import {syncMasterData} from './services/database';
import {override, increaseOpenCount} from './redux/actions/masterDataActions';

import Login from './screens/Login';
import Alliance from './screens/home/Alliance';
import Party from './screens/party';
import Candidate from './screens/candidate';
import Constituency from './screens/constituency';
import Search from './screens/search';
import WebViewIn from './screens/hotnews/WebViewIn';

import {login} from './redux/actions/authActions';

import {release as releaseVersion} from '../package.json';

import admob, {MaxAdContentRating} from '@react-native-firebase/admob';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  InterstitialAd,
} from '@react-native-firebase/admob';

import messaging from '@react-native-firebase/messaging';
import {GoogleSignin} from '@react-native-community/google-signin';

let adUnitId = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-1415621373127858/5194006765';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DataLayer = () => {
  const dispatch = useDispatch();
  const {openCount} = useSelector((state) => state.appData);
  const overrideFn = (_masterData) => dispatch(override(_masterData));

  // Handle user state changes
  function onAuthStateChanged(user) {
    dispatch(login(user));
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    dispatch(increaseOpenCount());

    if (openCount && (openCount == 10 || openCount == 25 || openCount == 50 || openCount == 100)) {
      Alert.alert(
        'Rating',
        'Please help us improve this app, by rating us in the Play Store',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () =>
              Linking.openURL('market://details?id=com.oruhelp.tnelection'),
          },
        ],
      );
    }
  }, []);

  React.useEffect(() => {
    syncMasterData((_masterData) => {
      overrideFn(_masterData);
      if (
        _masterData &&
        _masterData.release &&
        _masterData.release > releaseVersion
      ) {
        Alert.alert('New version available', _masterData.releaseText, [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Update',
            onPress: () =>
              Linking.openURL('market://details?id=com.oruhelp.tnelection'),
          },
        ]);
      }
    });
  }, []);

  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Hot News" component={HotNews} />
      <Drawer.Screen name="Announcements" component={Announcements} />
      <Drawer.Screen name="Parties" component={Parties} />
      <Drawer.Screen name="Constituencies" component={Constituencies} />
      <Drawer.Screen name="Candidates" component={Candidates} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

export default function App(props) {
  const paperTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3f51b5',
      accent: '#f50057',
    },
  };

  admob()
    .setRequestConfiguration({
      // Update all future requests suitable for parental guidance
      maxAdContentRating: MaxAdContentRating.G,

      // Indicates that you want your content treated as child-directed for purposes of COPPA.
      tagForChildDirectedTreatment: false,

      // Indicates that you want the ad request to be handled in a
      // manner suitable for users under the age of consent.
      tagForUnderAgeOfConsent: false,
    })
    .then(() => {
      // Request config successfully set!
    });

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      //Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    //InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);
    messaging()
      .subscribeToTopic('general')
      .then(() => console.log('Subscribed to topic - general'));
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '128132986177-h3qpca3ghchdrbqsajvqh5if7cge7t7r.apps.googleusercontent.com',
    });
  }, []);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#303f9f" />
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={paperTheme}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Home" component={DataLayer} />
              <Stack.Screen name="Party" component={Party} />
              <Stack.Screen name="Candidate" component={Candidate} />
              <Stack.Screen name="Alliance" component={Alliance} />
              <Stack.Screen name="Constituency" component={Constituency} />
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="WebView" component={WebViewIn} />
            </Stack.Navigator>
            <BannerAd
              unitId={adUnitId}
              size={BannerAdSize.FULL_BANNER}
              requestOptions={{
                requestNonPersonalizedAdsOnly: false,
              }}
            />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
