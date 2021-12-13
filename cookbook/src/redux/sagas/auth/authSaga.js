import {all, call, put, takeLatest} from 'redux-saga/effects';
import {authFirebase, db} from '../../../firebase/config';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {doc, setDoc} from "firebase/firestore";
import {defaultUserData} from "./config";


import {logInFailure, logInSuccess, registerFailure, registerSuccess,} from '../../actions/auth/authActions';
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

export function* logInWithCredentials({payload: {email, password}}) {
    try {
        yield logIn(email, password);
        const user = authFirebase.currentUser;
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

export function* onLogInStart() {
    yield takeLatest(types.LOG_IN_START, logInWithCredentials);
}

export function* onRegisterStart() {
    yield takeLatest(types.REGISTER_START, registerWithCredentials);
}

export function* onRegisterSuccess() {
    yield takeLatest(types.REGISTER_SUCCESS, logInAfterRegister);
}

export function* authSagas() {
    yield all([
        call(onLogInStart),
        call(onRegisterStart),
        call(onRegisterSuccess),
    ]);
}