import { all, call } from 'redux-saga/effects';
import { loginSaga } from './login';

export function* watchSagas() {
  yield all([call(loginSaga)]);
}
