import * as _ from 'lodash';
import { createSelector } from 'reselect';
import { RootState } from '@root/types/redux/rootState';

/**
 * landingSelector
 * @desc derives data from redux state
 * @prop infoState - redux state from the info reducer
 * @prop contestsState - redux state from the contests reducer
 * @prop bottomMenuState - redux state from the bottomMenu reducer
 * @returns {object} - object of derived data from redux state
 */
export default createSelector(
  (state: RootState) => state,
  () => {
    return {};
  }
);
