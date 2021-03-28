import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

export async function googleLogin() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

export async function googleLogout() {
  await GoogleSignin.revokeAccess();
  await GoogleSignin.signOut();
  return auth().signOut();
}

const response = {
  additionalUserInfo: {
    providerId: 'google.com',
    profile: {
      iss: 'https://accounts.google.com',
      exp: 1610687535,
      family_name: 'Chandrasekar',
      locale: 'en',
      email_verified: true,
      email: 'karthikeyanc.live@gmail.com',
      name: 'Karthikeyan Chandrasekar',
      sub: '104560743845872401908',
      iat: 1610683935,
      azp:
        '481313619330-nek9gkckcjjn3rkdco2hi2ajjaac7av8.apps.googleusercontent.com',
      aud:
        '481313619330-up59ii41apc7ollvbgrqnqfg7qcs2uri.apps.googleusercontent.com',
      picture:
        'https://lh3.googleusercontent.com/a-/AOh14GhrSZf5QxWDaHlZx04zQrrsFf96t5bomiqYamDL=s96-c',
      given_name: 'Karthikeyan',
    },
    isNewUser: false,
  },
  user: {
    metadata: {lastSignInTime: 1610684819340, creationTime: 1610684819340},
    providerData: [
      {
        email: 'karthikeyanc.live@gmail.com',
        phoneNumber: null,
        photoURL:
          'https://lh3.googleusercontent.com/a-/AOh14GhrSZf5QxWDaHlZx04zQrrsFf96t5bomiqYamDL=s96-c',
        displayName: 'Karthikeyan Chandrasekar',
        uid: '104560743845872401908',
        providerId: 'google.com',
      },
    ],
    phoneNumber: null,
    photoURL:
      'https://lh3.googleusercontent.com/a-/AOh14GhrSZf5QxWDaHlZx04zQrrsFf96t5bomiqYamDL=s96-c',
    displayName: 'Karthikeyan Chandrasekar',
    email: 'karthikeyanc.live@gmail.com',
    isAnonymous: false,
    emailVerified: true,
    providerId: 'firebase',
    uid: 'nWcaIqTOi0YSgq2UkOOB2iRBhAl2',
  },
};
