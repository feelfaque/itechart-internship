import { call, put, takeLatest } from 'redux-saga/effects';
import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAIL } from "../actions";
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function* signUp(action) {
    try {
        const result = yield call(
           [auth, createUserWithEmailAndPassword],
            action.user.email,
            action.user.password
        )
        yield put({ type: SIGN_UP_SUCCESS, user: action.user });
    } catch (error) {
        const error_message = { code: error.code, message: error.message };

        yield put({ type: SIGN_UP_FAIL, error: error_message });
    }
}

function* signUpWatcher () {
    yield takeLatest(SIGN_UP.type, signUp);
}

export default signUpWatcher;

