import {all, call, put, takeLatest} from 'redux-saga/effects';
import {doc, getDoc, updateDoc} from "firebase/firestore";
import {authFirebase, db} from "../../../firebase/config";
import {
    fetchUserDataFail, fetchUserDataStart,
    fetchUserDataSuccess,
    updateUserAvatarFail,
    updateUserAvatarSuccess
} from "../../actions/user-data/userDataActions";
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

const updateAvatarUrl = async (url) => {
    const currentUser = authFirebase.currentUser.uid;
    const ref = doc(db, "users", currentUser);

    await updateDoc(ref, {
        avatar: url
    });
}

export function* updateUserAvatar ({payload: url}) {
    try {
        yield call(updateAvatarUrl, url);
        yield put(updateUserAvatarSuccess);
        const currentUser = authFirebase.currentUser.uid;
        yield put(fetchUserDataStart(currentUser));
    } catch (error) {
        yield put(updateUserAvatarFail(error));
    }
}

export function* onUserAvatarUpdateStart () {
    yield takeLatest(types.UPDATE_USER_AVATAR_START, updateUserAvatar);
}

export function* userDataSaga() {
    yield all([
        call(onFetchDataStart),
        call(onUserAvatarUpdateStart)
    ]);
}