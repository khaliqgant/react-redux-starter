import { connect } from 'react-redux';
import { RootState } from '@root/types/redux/rootState';
import PageNotFound from '@root/components/pageNotFound';
import pageNotFoundSelector from '@root/redux/selectors/pageNotFound';

/**
 * mapStateToProps
 * @desc Maps redux state to component props.
 * @param state - The Redux state for the app.
 * @returns {object} an object of props (keys) mapped to state (values)
 */
const mapStateToProps = (state: RootState) => pageNotFoundSelector(state);

export default connect(
  mapStateToProps,
  {}
)(PageNotFound);
