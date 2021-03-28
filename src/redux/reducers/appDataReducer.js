const initialState = {
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
    default: {
      return state;
    }
  }
};

export default appDataReducer;
