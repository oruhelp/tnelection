const initialState = {
  blink: true,
};

const appDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BLINK': {
      return {
        ...state,
        blink: !state.blink,
      };
    }

    default: {
      return state;
    }
  }
};

export default appDataReducer;
