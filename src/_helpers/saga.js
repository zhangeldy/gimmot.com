import { all } from 'redux-saga/effects';
import { loginSaga } from '../pages/LoginPage/LoginDucks';

export default function* saga() {
  yield all([
    loginSaga(),
  ]);
}
