import * as React from 'react';
import {View, SafeAreaView, ScrollView, Text, FlatList} from 'react-native';
import {Appbar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ListItem from '../../components/ListItem';
import {getCountAsText} from '../../services/Utils';

const Candidates = (props) => {
  const masterData = useSelector((state) => state.masterData);
  const navigation = useNavigation();

  const [candidates, setCandidates] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const appendConstituency = (constituencyId, partyId, _subtitle) => {
    let subtitle;
    if (constituencyId && constituencyId != -1) {
      const _const = masterData.constituencies.filter(
        (_constituency) => _constituency.id === constituencyId,
      )[0];
      if (_const) subtitle = _const.name + ', ' + _const.dt;
    }
    if (!partyId) subtitle = 'Independent\n' + subtitle;
    if (partyId && partyId != -1) {
      const party = masterData.parties.filter(
        (_party) => _party.id === partyId,
      )[0];
      if (party) subtitle = party.name + '\n' + subtitle;
    }
    if (_subtitle) return subtitle + '\n' + _subtitle;
    return subtitle;
  };

  const isLeader = (candidateId) => {
    return (
      masterData.parties.filter((_party) => _party.leader === candidateId)
        .length > 0
    );
  };

  React.useEffect(() => {
    setLoading(true);

    const refactor = new Promise((resolve, reject) => {
      const refactoredCandidates = masterData.candidates
        .filter((x) => x.name != '-')
        .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
        .map((_candidate) => {
          const likes = _candidate.likes && {
            title: getCountAsText(_candidate.likes),
            icon: 'thumb-up',
          };
          const comments = _candidate.comments && {
            title: getCountAsText(_candidate.comments),
            icon: 'comment',
          };
          const leader = isLeader(_candidate.id)
            ? {title: 'Leader', icon: 'crown', color: '#F8D3A5'}
            : undefined;

          const status = {
            title: _candidate.status,
            color:
              _candidate.status === 'Applied'
                ? '#DBE7F6'
                : _candidate.status === 'Accepted'
                ? '#A6F0AB'
                : _candidate.status === 'Rejected'
                ? '#FF8888'
                : _candidate.status === 'Withdrawn'
                ? '#FDD4B4'
                : '#A4CAFA',
          };

          const oldChips = _candidate.chips
            ? Object.keys(_candidate.chips).map((key) => ({
                ..._candidate.chips[key],
              }))
            : [];

          return {
            ..._candidate,
            subtitle: appendConstituency(
              _candidate.constituency,
              _candidate.party,
              _candidate.subtitle,
            ),
            chips: [
              {...status},
              {...leader},
              {...likes},
              {...comments},
              ...oldChips,
            ],
          };
        });

      if (refactoredCandidates) {
        resolve(refactoredCandidates);
      } else {
        reject(Error('Error while refactoring candidates'));
      }
    });

    refactor.then(
      (_candidates) => {
        setCandidates(_candidates);
        setLoading(false);
      },
      () => {
        setLoading(false);
      },
    );
  }, [masterData]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{flex: 1, backgroundColor: '#ff408110'}}>
      <View>
        <Appbar.Header>
          <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
          <Appbar.Content title="Candidates" />
          <Appbar.Action
            icon="magnify"
            onPress={() =>
              navigation.navigate('Search', {
                page: 'Candidates',
              })
            }
          />
        </Appbar.Header>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={candidates}
          renderItem={({item}) => (
            <ListItem
              key={item.id}
              title={item.name}
              image={item.image}
              subtitle={item.subtitle}
              chips={item.chips}
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
    </View>
  );
};
export default Candidates;
