import {all, call, put, takeLatest} from 'redux-saga/effects';
import {authFirebase, db} from '../../../firebase/config';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {doc, setDoc} from "firebase/firestore";
import {defaultUserData} from "./config";
import {
    logInFailure,
    logInSuccess, logOutSuccess,
    registerFailure,
    registerSuccess,
} from '../../actions/auth/authActions';
import types from '../../actions/auth/authActionTypes';


const logIn = async (email, password) => {
    await signInWithEmailAndPassword(authFirebase, email, password);
};

const register = async (email, password) => {
    await createUserWithEmailAndPassword(authFirebase, email, password);
    const currentUser = authFirebase.currentUser;
    await setDoc(doc(db, 'users', currentUser.uid), {
        id: currentUser.uid,
        name: currentUser.email,
        email: currentUser.email,
        password: password,
        shortBio: defaultUserData.bio,
        avatar: defaultUserData.avatar
    })
};

const logOut = async () => {
    await signOut(authFirebase);
}

export function* logInWithCredentials({payload: {email, password}}) {
    try {
        yield logIn(email, password);
        const user = authFirebase.currentUser;
        localStorage.setItem('user', JSON.stringify(user));
        yield put(logInSuccess(user));
    } catch (error) {
        yield put(logInFailure(error));
    }
}

export function* registerWithCredentials({payload: {email, password}}) {
    try {
        yield register(email, password);
        yield put(registerSuccess({email, password}));
    } catch (error) {
        yield put(registerFailure(error));
    }
}

export function* logInAfterRegister({payload: {email, password}}) {
    yield logInWithCredentials({payload: {email, password}});
}

export function* logOutStart () {
    try {
        localStorage.removeItem('user');
        yield logOut;
        yield put(logOutSuccess);
    } catch (error) {
        console.log(error);
    }
}

export function* onLogInStart() {
    yield takeLatest(types.LOG_IN_START, logInWithCredentials);
}

export function* onRegisterStart() {
    yield takeLatest(types.REGISTER_START, registerWithCredentials);
}

export function* onRegisterSuccess() {
    yield takeLatest(types.REGISTER_SUCCESS, logInAfterRegister);
}

export function* onLogOutStart() {
    yield takeLatest(types.LOG_OUT, logOutStart);
}

export function* authSagas() {
    yield all([
        call(onLogInStart),
        call(onRegisterStart),
        call(onRegisterSuccess),
        call(onLogOutStart)
    ]);
}