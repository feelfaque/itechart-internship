import {all, call, put, takeLatest} from 'redux-saga/effects';
import {doc, getDoc, updateDoc} from "firebase/firestore";
import {updatePassword, updateEmail} from "firebase/auth";
import {authFirebase, db} from "../../../firebase/config";
import {
    fetchUserDataFail,
    fetchUserDataStart,
    fetchUserDataSuccess,
    updateUserAvatarFail,
    updateUserAvatarSuccess, updateUserEmailFail, updateUserEmailSuccess,
    updateUserNameFail,
    updateUserNameSuccess,
    updateUserPasswordFail,
    updateUserPasswordSuccess
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

const updateUserName = async(name) => {
    const currentUser = authFirebase.currentUser.uid;
    const ref = doc(db, "users", currentUser);

    await updateDoc(ref, {
        name: name
    });
}

export function* updateUserNameFunc ({payload: name}) {
    try {
        yield call(updateUserName, name);
        yield put(updateUserNameSuccess);
        const currentUser = authFirebase.currentUser.uid;
        yield put(fetchUserDataStart(currentUser));
    } catch (error) {
        yield put(updateUserNameFail(error));
    }
}

export function* onUserNameUpdateStart () {
    yield takeLatest(types.UPDATE_USER_NAME_START, updateUserNameFunc);
}

const updateUserAuthEmail = async(email) => {
    return await updateEmail(authFirebase.currentUser, email);
}

const updateUserFirestoreEmail = async(email) => {
    const currentUser = authFirebase.currentUser.uid;
    const ref = doc(db, "users", currentUser);

    await updateDoc(ref, {
        email: email
    });
}

export function* updateUserEmail ({payload: email}) {
    try {
        yield call(updateUserAuthEmail, email);
        yield call(updateUserFirestoreEmail, email);
        yield put(updateUserEmailSuccess);
        const currentUser = authFirebase.currentUser.uid;
        yield put(fetchUserDataStart(currentUser));
    } catch (error) {
        yield put(updateUserEmailFail(error));
    }
}

export function* onUpdateUserEmailStart () {
    yield takeLatest(types.UPDATE_USER_EMAIL_START, updateUserEmail);
}

const updateUserAuthPassword = async (password) => {
    return await updatePassword(authFirebase.currentUser, password);
}

const updateUserFirestorePassword = async(password) => {
    const currentUser = authFirebase.currentUser.uid;
    const ref = doc(db, "users", currentUser);

    await updateDoc(ref, {
        password: password
    });
}

export function* updateUserPassword ({payload: password}) {
    try {
        yield call(updateUserAuthPassword, password);
        yield call(updateUserFirestorePassword, password);
        yield put(updateUserPasswordSuccess);
        const currentUser = authFirebase.currentUser.uid;
        yield put(fetchUserDataStart(currentUser));
    } catch (error) {
        yield put(updateUserPasswordFail(error));
    }
}

export function* onUpdateUserPasswordStart () {
    yield takeLatest(types.UPDATE_USER_PASSWORD_START, updateUserPassword);
}

export function* userDataSaga() {
    yield all([
        call(onFetchDataStart),
        call(onUserAvatarUpdateStart),
        call(onUserNameUpdateStart),
        call(onUpdateUserEmailStart),
        call(onUpdateUserPasswordStart),
    ]);
}