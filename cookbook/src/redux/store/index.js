import { createStore, applyMiddleware } from 'redux'
import {logger} from "redux-logger/src";
import createSagaMiddleware from 'redux-saga'

import rootSaga from "../sagas/rootSaga";
import rootReducer from "../reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger]
const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
