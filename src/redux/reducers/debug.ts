/**
 * debug
 * @desc Mutates debug state based on actions.
 * @param {object} state - The current Redux state of the app. Defaults to the initialState value
 * @param action - The action that has been fired to mutate the state
 * @returns {object} the mutated state
 */
export default function debug(state = {}, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
