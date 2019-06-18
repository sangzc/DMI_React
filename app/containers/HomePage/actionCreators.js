/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  GET_COLORS_REQUEST,
  GET_COLORS_SUCCESS,
  GET_COLORS_ERROR,
} from './constants';

/**
 * Sends call to API for colors
 *
 * */
export function getColorsRequest() {
  return {
    type: GET_COLORS_REQUEST,
  };
}

export function getColorsSuccess(response) {
  return {
    type: GET_COLORS_SUCCESS,
    response,
  };
}

export function getColorsError(error) {
  return {
    type: GET_COLORS_ERROR,
    error,
  };
}
