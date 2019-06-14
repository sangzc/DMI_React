/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

// The initial state of the App
export const initialState = {
  colors: ['red', 'orange', 'yellow', 'green', 'blue'],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState) => ({ ...state });

export default homeReducer;
