import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { getColorsSuccess, getColorsError } from './actions';

export default function* colorsSaga() {
  try {
    // trying to call the api
    const response = yield call(axios.get, 'http://localhost:5000/colors');
    console.log('THIS IS THE API RESPONSE', response);
    yield put(getColorsSuccess(response.data));
  } catch (e) {
    // catch the error
    console.log('ERROR', e);
    yield put(getColorsError(e.message));
  }
}
