import { RootState } from '@root/types/redux/rootState';
import { connect } from 'react-redux';
import Landing from '@root/components/landing';
import landingSelector from '@root/redux/selectors/landing';

/**
 * mapStateToProps
 * @desc Maps redux state to component props.
 * @param state - The Redux state for the app.
 * @returns {object} an object of props (keys) mapped to state (values)
 */
const mapStateToProps = (state: RootState) => landingSelector(state);

export default connect(
  mapStateToProps,
  {}
)(Landing);
