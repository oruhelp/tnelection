const initialState = {
  loggedIn: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        user: action.payload,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        user: undefined,
      };
    }
    case 'SET_IMGBB_API_KEY': {
      return {
        ...state,
        integrations: {...state?.integrations, imgbb: action.payload},
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
