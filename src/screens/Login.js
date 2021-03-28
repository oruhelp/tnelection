import React from 'react';
import {View, Text} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {googleLogin, googleLogout} from '../services/auth';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout} from '../redux/actions/authActions';

const Login = () => {
  const authUser = useSelector((state) => state.authUser);
  const dispatch = useDispatch();


  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Login" />
      </Appbar.Header>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {authUser && authUser.user ? (
          <Button
            icon="google"
            mode="contained"
            onPress={() =>
              googleLogout()
                .then((res) => dispatch(logout()))
                .catch((err) => console.log(JSON.stringify(err)))
            }>
            Logout
          </Button>
        ) : (
          <Button
            icon="google"
            mode="contained"
            onPress={() =>
              googleLogin()
                .then((res) => {
                  dispatch(login(res.user));
                })
                .catch((err) => console.log(JSON.stringify(err)))
            }>
            Google
          </Button>
        )}
      </View>
    </View>
  );
};

export default Login;
