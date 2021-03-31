import * as React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import {Searchbar, Appbar, Title, Caption} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import RoundTabs from '../../components/Tabs/RoundTabs';
import Tab from '../../components/Tabs/Tab';
import ListItem from '../../components/ListItem';

const Search = ({route}) => {
  const navigation = useNavigation();
  const page = route?.params?.page;
  const masterData = useSelector((state) => state.masterData);

  const [filteredCandidates, setFilteredCandidates] = React.useState([]);
  const [filteredConstituencies, setFilteredConstituencies] = React.useState(
    [],
  );
  const [filteredParties, setFilteredParties] = React.useState([]);

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => {
    setSearchQuery(query);

    setFilteredCandidates(
      masterData.candidates.filter((_candidate) => {
        if (_candidate.name && query)
          return _candidate.name.toLowerCase().includes(query.toLowerCase());
        else return false;
      }),
    );
    setFilteredConstituencies(
      masterData.constituencies.filter(
        (_constituency) =>
          (_constituency.name &&
            query &&
            _constituency.name.toLowerCase().includes(query.toLowerCase())) ||
          (_constituency.dt &&
            query &&
            _constituency.dt.toLowerCase().includes(query.toLowerCase())),
      ),
    );
    setFilteredParties(
      masterData.parties.filter(
        (_party) =>
          _party.name &&
          query &&
          _party.name.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  const getConstituencyAndParty = (constituencyId, partyId) => {
    let subtitle;
    if (constituencyId && constituencyId != -1) {
      const _const = masterData.constituencies.filter(
        (_constituency) => _constituency.id === constituencyId,
      )[0];
      if (_const) subtitle = _const.name + ', ' + _const.dt;
    }

    if (partyId && partyId != -1) {
      const party = masterData.parties.filter(
        (_party) => _party.id === partyId,
      )[0];
      if (party) subtitle = subtitle + '\n' + party.name;
    } else {
      subtitle = subtitle + '\nIndependent';
    }
    return subtitle;
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ff408110'}}>
      <View style={{marginBottom: 20}}>
        <Appbar.Header>
          <Appbar.Action
            icon="arrow-left"
            onPress={() => navigation.goBack()}
          />
          <TextInput
            style={{
              height: 40,
              borderWidth: 1,
              flex: 1,
              borderRadius: 5,
              backgroundColor: '#fff',
            }}
            returnKeyType="search"
            placeholder="Search"
            autoFocus
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </Appbar.Header>
      </View>
      <RoundTabs activeTab={page}>
        <Tab title="Candidates" icon="account-group">
          <Caption style={{alignSelf: 'center'}}>Candidates</Caption>
          <SafeAreaView style={{flex: 1}}>
            <FlatList
              data={filteredCandidates}
              renderItem={({item}) => (
                <ListItem
                  key={item.id}
                  title={item.name}
                  image={item.image}
                  subtitle={getConstituencyAndParty(
                    item.constituency,
                    item.party,
                  )}
                  onPress={() =>
                    navigation.navigate('Candidate', {
                      id: item.id,
                    })
                  }
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </Tab>
        <Tab title="Constituencies" icon="map-marker">
          <Caption style={{alignSelf: 'center'}}>Constituencies</Caption>
          <SafeAreaView style={{flex: 1}}>
            <FlatList
              data={filteredConstituencies}
              renderItem={({item}) => (
                <ListItem
                  key={item.id}
                  title={item.name}
                  image={item.image}
                  subtitle={item.dt}
                  onPress={() =>
                    navigation.navigate('Constituency', {
                      id: item.id,
                    })
                  }
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </Tab>
        <Tab title="Party" icon="flag">
          <Caption style={{alignSelf: 'center'}}>Parties</Caption>
          <SafeAreaView style={{flex: 1}}>
            <FlatList
              data={filteredParties}
              renderItem={({item}) => (
                <ListItem
                  key={item.id}
                  title={item.name}
                  image={item.symbol}
                  onPress={() =>
                    navigation.navigate('Party', {
                      id: item.id,
                    })
                  }
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </Tab>
      </RoundTabs>
    </View>
  );
};

export default Search;
