/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import {
  GET_COLORS_SUCCESS,
  GET_COLORS_REQUEST,
  GET_COLORS_ERROR,
} from './constants';
import {
  ADD_NEW_COLOR_SUCCESS,
  ADD_NEW_COLOR_REQUEST,
  ADD_NEW_COLOR_ERROR,
} from '../ColorPage/constants';

// The initial state of the App
export const initialState = {
  colors: [],
  isLoading: true,
  initialLoad: true,
};

/* eslint-disable default-case, no-param-reassign */
export default function homeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_COLORS_REQUEST:
      return { ...state, isLoading: true };

    case GET_COLORS_SUCCESS:
      return { colors: [...action.response], isLoading: false, initialLoad: false };

    case GET_COLORS_ERROR:
      return { ...state, isLoading: false };

    case ADD_NEW_COLOR_REQUEST:
      return { ...state, isLoading: true };

    case ADD_NEW_COLOR_SUCCESS:
      return { ...state, colors: [...action.response], isLoading: false };

    case ADD_NEW_COLOR_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}
