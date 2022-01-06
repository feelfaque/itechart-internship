import {call, put, takeLatest} from 'redux-saga/effects';
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../../firebase/config";
import {fetchUserDataFail, fetchUserDataSuccess} from "../../actions/user-data/userDataActions";
import types from "../../actions/user-data/userDataActionTypes";

const getUserData = async (id) => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    return (await docSnap).data();
}

export function* fetchUserDataFunc({payload: userID}) {
    try {
        let userInfo = yield call(getUserData, userID);
        yield put(fetchUserDataSuccess(userInfo));
    } catch (error) {
        yield put(fetchUserDataFail(error));
    }
}

export function* onFetchDataStart() {
    yield takeLatest(types.FETCH_USER_DATA_START, fetchUserDataFunc)
}

export function* userDataSaga() {
    yield call(onFetchDataStart);
}