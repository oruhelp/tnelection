import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import Constituencies from './Constituencies';
import Candidates from './Candidates';
import Parties from './Parties';
import Alliance from './Alliance';
import Party from '../party';
import Candidate from '../candidate';
import {override} from '../../redux/actions/masterDataActions';
import {syncMasterData} from '../../services/database';

const Stack = createStackNavigator();

export default function () {
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={BottomTab} />
      <Stack.Screen name="Party" component={Party} />
      <Stack.Screen name="Candidate" component={Candidate} />
      <Stack.Screen name="Alliance" component={Alliance} />
    </Stack.Navigator>
  );
}
function BottomTab() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'parties', title: 'Parties', icon: 'flag'},
    {key: 'constituencies', title: 'Constituencies', icon: 'map-marker'},
    {key: 'candidates', title: 'Candidates', icon: 'account-group'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    parties: Parties,
    constituencies: Constituencies,
    candidates: Candidates,
  });
  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
