import * as _ from 'lodash';
import { createSelector } from 'reselect';
import { RootState } from '@root/types/redux/rootState';

/**
 * PageNotFound Selector
 * @desc derives data from redux state
 * @prop pageNotFound - redux state from the winners reducer
 * @returns {object} - object of derived data from redux state
 */
export default createSelector(
  (state: RootState) => state,
  infoState => {
    return {};
  }
);
