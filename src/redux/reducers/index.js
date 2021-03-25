import {combineReducers} from 'redux';

import masterDataReducer from './masterDataReducer';
import appDataReducer from './appDataReducer';

const rootReducer = combineReducers({
  masterData: masterDataReducer,
  appData: appDataReducer,
});

export default rootReducer;
