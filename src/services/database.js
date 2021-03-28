import database from '@react-native-firebase/database';

export const getChats = (onChange) => {
  return database()
    .ref(`/appo/support/chat`)
    .orderByChild('lastUpdated')
    .on('value', (snapshot) => {
      const returnArr = [];
      snapshot?.forEach(function (childSnapshot) {
        const item = childSnapshot.val();

        const _messages = item.messages;

        const messages = Object.keys(_messages).reduce((array, key) => {
          return [...array, _messages[key]];
        }, []);

        returnArr.push({
          lastUpdated: item.lastUpdated,
          messages: messages,
          uid: childSnapshot.key,
        });
      });
      onChange(returnArr.reverse());
    });
};

export const syncChatSupport = (uid, onChange) => {
  return database()
    .ref(`/appo/support/chat/${uid}/messages`)
    .orderByChild('createdAt')
    .limitToLast(100)
    .on('value', (snapshot) => {
      const returnArr = [];
      snapshot.forEach(function (childSnapshot) {
        const item = childSnapshot.val();
        returnArr.push({...item});
      });
      onChange(returnArr.reverse());
    });
};

export const addChatSupportMessage = (uid, data) => {
  database()
    .ref(`/appo/support/chat/${uid}/lastUpdated`)
    .set(database.ServerValue.TIMESTAMP);
  return database()
    .ref(`/appo/support/chat/${uid}/messages`)
    .push({...data, createdAt: database.ServerValue.TIMESTAMP});
};

export const deleteChat = (uid) => {
  return database().ref(`/appo/support/chat/${uid}`).remove();
};

// below
export const syncMasterData = (onChange) => {
  return database()
    .ref(`/app/masterData`)
    .on('value', (snapshot) => {
      let returnVal = snapshot.val();

      if (returnVal.constituencies) {
        returnVal.constituencies = Object.keys(returnVal.constituencies).map(
          (key) => ({
            ...returnVal.constituencies[key],
            id: key,
          }),
        );
      }
      if (returnVal.parties) {
        returnVal.parties = Object.keys(returnVal.parties).map((key) => ({
          ...returnVal.parties[key],
          id: key,
        }));
      }

      if (returnVal.candidates) {
        returnVal.candidates = Object.keys(returnVal.candidates).map((key) => ({
          ...returnVal.candidates[key],
          id: key,
        }));
      }

      onChange(returnVal);
    });
};

export const getHotNews = ( onChange) => {
  return database().ref('/app/updates/hotnews')
  .limitToLast(100)
  .on('value', (snapshot) => {
      let returnVal = snapshot.val();

       returnVal = Object.keys(returnVal).map(
          (key) => ({
            ...returnVal[key],
            id: key,
          }),
        );

       onChange(returnVal);
  });
  
};

export const getAnnouncements = ( onChange) => {
  return database().ref('/app/updates/announcements')
  .limitToLast(100)
  .on('value', (snapshot) => {
      let returnVal = snapshot.val();

       returnVal = Object.keys(returnVal).map(
          (key) => ({
            ...returnVal[key],
            id: key,
          }),
        );

       onChange(returnVal);
  });
  
};

export const unsubscribeAnnouncements = () => {
  return database().ref('/app/updates/announcements').off('value');
}

export const unsubscribeHotNews = () => {
  return database().ref('/app/updates/hotnews').off('value');
}

export const likeParty = (partyId) => {
  return database()
  .ref(`/app/masterData/parties/${partyId}/likes`)
  .set(database.ServerValue.increment(1))
}

export const dislikeParty = (partyId) => {
  return database()
  .ref(`/app/masterData/parties/${partyId}/likes`)
  .set(database.ServerValue.increment(-1))
}

export const likeCandidate = (candidateId) => {
  return database()
  .ref(`/app/masterData/candidates/${candidateId}/likes`)
  .set(database.ServerValue.increment(1))
}

export const dislikeCandidate = (candidateId) => {
  return database()
  .ref(`/app/masterData/candidates/${candidateId}/likes`)
  .set(database.ServerValue.increment(-1))
}

export const likeConstituency = (constituencyId) => {
  return database()
  .ref(`/app/masterData/constituencies/${constituencyId}/likes`)
  .set(database.ServerValue.increment(1))
}

export const dislikeConstituency = (constituencyId) => {
  return database()
  .ref(`/app/masterData/constituencies/${constituencyId}/likes`)
  .set(database.ServerValue.increment(-1))
}