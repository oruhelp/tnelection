import {combineReducers} from 'redux';

import masterDataReducer from './masterDataReducer';
import appDataReducer from './appDataReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  masterData: masterDataReducer,
  appData: appDataReducer,
  authUser: authReducer,
});

export default rootReducer;
