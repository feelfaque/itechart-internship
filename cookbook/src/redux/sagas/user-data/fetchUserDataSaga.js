import {call, put, takeLatest} from 'redux-saga/effects';
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../../firebase/config";
import {fetchUserDataFail, fetchUserDataSuccess} from "../../actions/user-data/userDataActions";
import types from "../../actions/user-data/userDataActionTypes";

const userInfo = {};
const getUserData = async(id) => {
    const docRef = doc(db, "users", id);
    const docSnap = getDoc(docRef);
    Object.assign(userInfo, (await docSnap).data());
}

export function* fetchUserDataFunc ({payload: userID}) {
    try {
        yield getUserData(userID);
        yield put(fetchUserDataSuccess(userInfo));
    } catch {
        yield put(fetchUserDataFail())
    }
}

export function* onFetchDataStart () {
    yield takeLatest(types.FETCH_USER_DATA_START, fetchUserDataFunc)
}

export function* userDataSaga () {
    yield call(onFetchDataStart);
}