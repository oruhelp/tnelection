const initialState = {
  comments: {},
};

const appDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BLINK': {
      return {
        ...state,
        blink: !state.blink,
      };
    }
    case 'INCREASE_OPEN_COUNT': {
      if (state.openCount) {
        return {...state, openCount: state.openCount + 1};
      }
      return {...state, openCount: 1};
    }
    case 'COMMENT_LIKED': {
      if (!state.comments) state.comments = {};
      if (!state.comments[action.payload.key])
        state.comments[action.payload.key] = {};
      if (!state.comments[action.payload.key].comments)
        state.comments[action.payload.key].comments = {};
      if (
        !state.comments[action.payload.key].comments[action.payload.commentId]
      )
        state.comments[action.payload.key].comments[
          action.payload.commentId
        ] = {};

      state.comments[action.payload.key].comments[
        action.payload.commentId
      ].liked = true;
      return {...state};
    }
    case 'COMMENT_DISLIKED': {
      if (!state.comments) state.comments = {};
      if (!state.comments[action.payload.key])
        state.comments[action.payload.key] = {};
      if (!state.comments[action.payload.key].comments)
        state.comments[action.payload.key].comments = {};
      if (
        !state.comments[action.payload.key].comments[action.payload.commentId]
      )
        state.comments[action.payload.key].comments[
          action.payload.commentId
        ] = {};

      state.comments[action.payload.key].comments[
        action.payload.commentId
      ].liked = false;
      return {...state};
    }
    case 'DELETE_COMMENT': {
      if (
        state.comments &&
        state.comments[action.payload.key] &&
        state.comments[action.payload.key].comments &&
        state.comments[action.payload.key].comments[action.payload.commentId]
      ) {
        delete state.comments[action.payload.key].comments[
          action.payload.commentId
        ];
      }
      return {...state};
    }
    case 'PARTY_LIKED': {
      const partyId = action.payload;

      if (!partyId) return state;
      if (!state.parties) state.parties = {};
      if (!state.parties[partyId]) state.parties[partyId] = {};

      state.parties[partyId].liked = true;
      return {...state};
    }
    case 'PARTY_DISLIKED': {
      const partyId = action.payload;

      if (!partyId) return state;
      if (!state.parties) state.parties = {};
      if (!state.parties[partyId]) state.parties[partyId] = {};

      state.parties[partyId].liked = false;
      return {...state};
    }
    case 'CANDIDATE_LIKED': {
      const candidateId = action.payload;

      if (!candidateId) return state;
      if (!state.candidates) state.candidates = {};
      if (!state.candidates[candidateId]) state.candidates[candidateId] = {};

      state.candidates[candidateId].liked = true;
      return {...state};
    }
    case 'CANDIDATE_DISLIKED': {
      const candidateId = action.payload;

      if (!candidateId) return state;
      if (!state.candidates) state.candidates = {};
      if (!state.candidates[candidateId]) state.candidates[candidateId] = {};

      state.candidates[candidateId].liked = false;
      return {...state};
    }
    case 'CONSTITUENCY_LIKED': {
      const constituencyId = action.payload;

      if (!constituencyId) return state;
      if (!state.constituencies) state.constituencies = {};
      if (!state.constituencies[constituencyId]) state.constituencies[constituencyId] = {};

      state.constituencies[constituencyId].liked = true;
      return {...state};
    }
    case 'CONSTITUENCY_DISLIKED': {
      const constituencyId = action.payload;

      if (!constituencyId) return state;
      if (!state.constituencies) state.constituencies = {};
      if (!state.constituencies[constituencyId]) state.constituencies[constituencyId] = {};

      state.constituencies[constituencyId].liked = false;
      return {...state};
    }
    default: {
      return state;
    }
  }
};

export default appDataReducer;
