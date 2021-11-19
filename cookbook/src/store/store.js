import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import signUpWatcher from "../sagas";

const sagaMiddleware = createSagaMiddleware();

import {reducer} from "../reducers";

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(signUpWatcher);