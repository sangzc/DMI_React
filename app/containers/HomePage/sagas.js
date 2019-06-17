import { call, put } from 'redux-saga/effects';

import { getAllColorsAPI } from './apis';
import { addNewColorAPI } from '../ColorPage/apis';
import { getColorsSuccess, getColorsError } from './actionCreators';
import { addColorSuccess, addColorError } from '../ColorPage/actionCreators';


/**
 * Saga worker that is responsible for getting all
 * the list of colors from the backend
 */
export function* getColorsSaga(action) {
  try {
    // request to call the api for all the colors
    const response = yield call(getAllColorsAPI);
    yield put(getColorsSuccess(response));
  } catch (error) {
    // catch the error
    yield put(getColorsError(error));
  }
}

/**
 * Saga worker that is responsible for
 * adding a new color to the backend
 */
export function* addColorSaga(action) {

  try {
    // request to call the api for all the colors
    const response = yield call(addNewColorAPI, action.newColor);
    yield put(addColorSuccess(response));

  } catch (error) {
    // catch the error
    yield put(addColorError(error));
  }
}
