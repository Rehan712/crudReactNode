import { takeLatest, fork, all } from 'redux-saga/effects';
import * as types from '../constants';
import fetchDataSaga from './fetchDataSaga';

function* watchFetchData() {
  yield takeLatest(types.FETCH_DATA, fetchDataSaga);
}

export default function* rootSaga() {
  yield all([
    fork(watchFetchData)
    // another action listener,
  ]);
}
