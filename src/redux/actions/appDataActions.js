// app
export const toggleBlink = () => ({
  type: 'SET_BLINK',
});

export const commentLiked = (key, commentId) => ({
  type: 'COMMENT_LIKED',
  payload: {key: key, commentId: commentId},
});
export const commentDisliked = (key, commentId) => ({
  type: 'COMMENT_DISLIKED',
  payload: {key: key, commentId: commentId},
});

export const deleteCommentLocal = (key, commentId) => ({
  type: 'DELETE_COMMENT',
  payload: {key: key, commentId: commentId},
});
