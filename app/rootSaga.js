import { all, takeEvery } from 'redux-saga/effects';

import { GET_COLORS_REQUEST } from './containers/HomePage/constants';
import { ADD_NEW_COLOR_REQUEST } from './containers/ColorPage/constants';
import { getColorsSaga, addColorSaga } from './containers/HomePage/sagas';

export function* watchColorsSaga() {
  yield takeEvery(GET_COLORS_REQUEST, getColorsSaga);
  yield takeEvery(ADD_NEW_COLOR_REQUEST, addColorSaga);
}

export function* rootSaga() {
  yield all([watchColorsSaga()]);
}
