import { all, call } from 'redux-saga/effects';

import { authSagas } from './auth/authSaga';
import {userDataSaga} from "./user-data/userDataSaga";
import {imageStorageSaga} from "./image-storage/imageStorageSaga";
import {dataUploadSaga} from "./data-upload/dataUploadSaga";
import {dataFetchSaga} from "./data-fetch/dataFetchSaga";
import {statsSaga} from "./stats/statsSaga";

export default function* rootSaga() {
    yield all([
        call(authSagas),
        call(userDataSaga),
        call(imageStorageSaga),
        call(dataUploadSaga),
        call(dataFetchSaga),
        call(statsSaga)
    ]);
}

