import * as React from 'react';
import {View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ListItem from '../../components/ListItem';
import {getCountAsText} from '../../services/Utils';

const Candidates = (props) => {
  const masterData = useSelector((state) => state.masterData);
  const navigation = useNavigation();

  const {id, constituency} = props;

  const candidates = masterData.candidates.filter(
    (_candidate) => _candidate.party === id,
  );

  const isLeader = (candidateId) => {
    return (
      masterData.parties.filter((_party) => _party.leader === candidateId)
        .length > 0
    );
  };

  const appendConstituency = (constituencyId, _subtitle) => {
    if (!constituencyId || constituencyId === -1) return _subtitle;

    const _const = masterData.constituencies.filter(
      (_constituency) => _constituency.id === constituencyId,
    )[0];
    if (!_const) console.log('Constituency not found - ', constituencyId);
    return (
      _const.name + ', ' + _const.dt + (!_subtitle ? '' : '\n' + _subtitle)
    );
  };

  const getCandidates = () => {
    return candidates
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
          id: _candidate.id,
          name: _candidate.name,
          image: _candidate.image,
          subtitle: appendConstituency(
            _candidate.constituency,
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
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={getCandidates()}
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
  );
};
export default Candidates;
