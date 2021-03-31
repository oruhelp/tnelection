import * as React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Alert,
  RefreshControl,
} from 'react-native';
import {Modal, Portal, Button, TextInput, HelperText} from 'react-native-paper';
import Comment from '../../components/Comment';
import {useSelector, useDispatch} from 'react-redux';
import {getCountAsText, getTimestampString} from '../../services/Utils';
import {useNavigation} from '@react-navigation/native';
import {
  getComments,
  likeComment,
  dislikeComment,
  addCommentToFire,
  deleteCommentFromFire,
} from '../../services/database';
import {
  commentLiked,
  commentDisliked,
  deleteCommentLocal,
} from '../../redux/actions/appDataActions';

const Comments = ({id}) => {
  const navigation = useNavigation();
  const localComments = useSelector((state) => state.appData.comments);
  const authUser = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const [comments, setComments] = React.useState([]);
  const [addCommentVisible, setAddCommentVisible] = React.useState(false);
  const [newComment, setNewComment] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const [modelOkLoading, setModelOkLoading] = React.useState(false);
  const [deletingComment, setDeletingComment] = React.useState(false);

  React.useEffect(() => {
    console.log(localComments);
    refreshComments();
  }, [localComments]);

  const refreshComments = () => {
    setRefreshing(true);
    getComments(id)
      .then((res) => {
        const merge = require('deepmerge');
        setComments(
          merge(
            res,
            (localComments &&
              localComments[id] &&
              localComments[id]?.comments) ||
              {},
          ),
        );
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  };

  const m_likeComment = (commentId) => {
    if (!authUser || !authUser.user) {
      Alert.alert('Login', 'Please login to proceed', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.navigate('Login')},
      ]);
      return;
    }
    setComments((prevComments) => {
      prevComments[commentId].likes = (prevComments[commentId].likes || 0) + 1;
      prevComments[commentId].liked = true;
      return {...prevComments};
    });
    likeComment(id, commentId)
      .then(() => {
        dispatch(commentLiked(id, commentId));
      })
      .catch(() => {
        setComments((prevComments) => {
          prevComments[commentId].likes =
            (prevComments[commentId].likes || 1) - 1;
          prevComments[commentId].liked = false;
          return {...prevComments};
        });
      });
  };

  const m_dislikeComment = (commentId) => {
    setComments((prevComments) => {
      prevComments[commentId].likes = (prevComments[commentId].likes || 1) - 1;
      prevComments[commentId].liked = false;
      return {...prevComments};
    });
    dislikeComment(id, commentId)
      .then(() => {
        dispatch(commentDisliked(id, commentId));
      })
      .catch(() => {
        setComments((prevComments) => {
          prevComments[commentId].likes =
            (prevComments[commentId].likes || 0) + 1;
          prevComments[commentId].liked = true;
          return {...prevComments};
        });
      });
  };

  const addComment = () => {
    if (!authUser || !authUser.user) {
      Alert.alert('Login', 'Please login to proceed', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.navigate('Login')},
      ]);
    } else {
      setAddCommentVisible(true);
    }
  };

  const addCommentToServer = () => {
    if (modelOkLoading) return;
    setModelOkLoading(true);
    addCommentToFire(id, {
      comment: newComment,
      owner: {uid: authUser.user.uid, name: authUser.user.displayName},
    })
      .then(() => {
        refreshComments();
        setModelOkLoading(false);
        setAddCommentVisible(false);
        setNewComment('');
      })
      .catch(() => {
        setModelOkLoading(false);
      });
  };

  const m_deleteComment = (commentId) => {
    Alert.alert('Delete', 'Are you sure you want to delete this comment?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          setDeletingComment(true);
          deleteCommentFromFire(id, commentId)
            .then(() => {
              refreshComments();
              setDeletingComment(false);
              dispatch(deleteCommentLocal(id, commentId));
            })
            .catch(() => {
              setDeletingComment(false);
            });
        },
      },
    ]);
  };

  const canEdit = (commentId) => {
    if (!authUser) return false;
    if (!authUser.user) return false;
    if (!authUser.user.uid) return false;
    if (!comments) return false;
    if (!comments[commentId]) return false;
    if (!comments[commentId].owner) return false;
    if (!comments[commentId].owner.uid) return false;

    if (authUser.user.uid == comments[commentId].owner.uid) return true;

    return false;
  };

  const renderItem = ({item}) => (
    <Comment
      {...item}
      onLike={() => m_likeComment(item.id)}
      onDislike={() => m_dislikeComment(item.id)}
      canEdit={canEdit(item.id)}
      onDelete={() => m_deleteComment(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Button
        mode="text"
        style={{marginVertical: 5}}
        onPress={() => addComment()}>
        Add Comment
      </Button>
      <Portal>
        <Modal
          visible={addCommentVisible}
          contentContainerStyle={{backgroundColor: 'white', padding: 20}}>
          <TextInput
            mode="outlined"
            multiline
            numberOfLines={5}
            autoFocus
            placeholder="Start typing here..."
            label="Your Comment"
            value={newComment}
            onChangeText={(text) => setNewComment(text)}
          />
          <HelperText type="error">
            *Please be caution, you can't edit this comment again
          </HelperText>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Button
              mode="text"
              style={{marginVertical: 5}}
              onPress={() => setAddCommentVisible(false)}>
              Cancel
            </Button>
            <Button
              disabled={modelOkLoading}
              mode="text"
              style={{marginVertical: 5}}
              onPress={() => addCommentToServer()}>
              OK
            </Button>
          </View>
        </Modal>
      </Portal>
      {Object.keys(comments).length == 0 && !refreshing && (
        <Text style={{alignSelf: 'center', marginTop: 50}}>Be the first to comment</Text>
      )}
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => refreshComments()}
          />
        }
        data={Object.keys(comments)
          .map((key) => {
            if (!comments[key]) return;
            return {
              ...comments[key],
              id: key,
              date: getTimestampString(comments[key]?.date),
              sortDate: comments[key].date,
              likes: getCountAsText(comments[key]?.likes),
            };
          })
          .sort((x, y) => (x.sortDate > y.sortDate ? -1 : 1))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff408110',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Comments;
