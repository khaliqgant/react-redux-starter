import { combineReducers } from 'redux';
import debug from './reducers/debug';

const rootReducer = combineReducers({
  debug,
});

export default rootReducer;
