import { all, call } from 'redux-saga/effects';

import { authSagas } from './auth/authSaga';
import {userDataSaga} from "./user-data/fetchUserDataSaga";

export default function* rootSaga() {
    yield all([
        call(authSagas),
        call(userDataSaga)
    ]);
}

