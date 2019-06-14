/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import { GET_COLORS, GET_COLORS_SUCCESS, GET_COLORS_ERROR } from './constants';

// The initial state of the App
export const initialState = [];

/* eslint-disable default-case, no-param-reassign */
export default function homeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_COLORS:

    case GET_COLORS_SUCCESS:
      console.log('Made it to the GET_COLORS_SUCCESS reducer!');
      return [action.response.colors];

    case GET_COLORS_ERROR:
      return state;
    default:
      return state;
  }
}
