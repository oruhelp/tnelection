import React from 'react';
import {View, Linking } from 'react-native';
import {
  Appbar,
  Text,
  List,
  Subheading,
  Headline,
  Title,
} from 'react-native-paper';
import NewsItem from '../../components/ListItem/NewsItem';
import {useNavigation} from '@react-navigation/native';
import {getHotNews, unsubscribeHotNews} from '../../services/database';

const HotNews = (props) => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    getHotNews((DATA) => setData(DATA));
    return () => unsubscribeHotNews();
  }, []);

  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#ff408110'}}>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Hot News" />
      </Appbar.Header>
      <View style={{flex: 1}}>
        {data ? (
          data.map((_item) => (
            <NewsItem
              key={_item.id}
              {..._item}
              onPress={
                _item.op
                  ? () =>
                      navigation.navigate('WebView', {
                        url: _item.op,
                        title: _item.title,
                      })
                  : undefined
              }
            />
          ))
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Loading...</Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default HotNews;
