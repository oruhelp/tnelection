import React from 'react';
import {Linking, View, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import {WebView} from 'react-native-webview';

const WebViewIn = ({route}) => {
  const navigation = useNavigation();
  const {url, title} = route?.params;

  const [loading, setLoading] = React.useState(true);

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
        <Appbar.Content title={title} />
        <Appbar.Action icon="application-export" onPress={() => Linking.openURL(url)} />
      </Appbar.Header>
      <View style={{height: '100%'}}>
        {loading && <ActivityIndicator />}
        <WebView
          style={{opacity: 0.99}}
          source={{uri: url}}
          onLoad={() => setLoading(false)}
        />
      </View>
    </View>
  );
};
export default WebViewIn;
