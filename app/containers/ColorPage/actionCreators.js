/*
 * ColorPage Action Creators
 *
 */

import {
  ADD_NEW_COLOR_REQUEST,
  ADD_NEW_COLOR_SUCCESS,
  ADD_NEW_COLOR_ERROR,
} from './constants';

/**
 * Sends call to API to add new color
 *
 * */
export function addColorRequest(newColor) {
  return {
    type: ADD_NEW_COLOR_REQUEST,
    newColor,
  };
}

export function addColorSuccess(response) {
  return {
    type: ADD_NEW_COLOR_SUCCESS,
    response,
  };
}

export function addColorError(error) {
  return {
    type: ADD_NEW_COLOR_ERROR,
    error,
  };
}
