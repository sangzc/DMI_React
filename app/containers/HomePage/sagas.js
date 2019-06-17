import { call, put, all, takeEvery } from 'redux-saga/effects';
import { GET_COLORS_REQUEST, 
         GET_COLORS_SUCCESS, 
         GET_COLORS_ERROR } from './constants';
import { getAllColorsAPI } from './apis';

/**
 * Saga worker that is responsible for getting all 
 * the list of colors from the backend
 */
export function* getColorsSaga(action) {
  try {
    // request to call the api for all the colors
    const response = yield call(getAllColorsAPI);
    yield put({
      type: GET_COLORS_SUCCESS,
      response,
    });
  } catch (e) {
    // catch the error
    yield put({
      type: GET_COLORS_ERROR,
      error,
    });
  }
}

export function* watchColorsSaga() {
  yield takeEvery(GET_COLORS_REQUEST, getColorsSaga)
}

export function* rootSaga() {
  yield all([
    watchColorsSaga(),
  ])
}