import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import * as _ from 'lodash';
import rootReducer from '@root/redux/rootReducer';
import isDevelopment from '@root/utils/isDevelopment';

/**
 * configureStore
 * @desc Configures the Redux store with middlewares
 * @returns {object} the Redux store: an object that holds the complete state of the app.
 */
const configureStore = () => {
  const logger = createLogger();
  const middlewares = isDevelopment() ? [logger, thunk] : [thunk];
  const enhancer = applyMiddleware(...middlewares);
  return createStore(rootReducer, {}, enhancer);
};

const store = configureStore();

export default store;
