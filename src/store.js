import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import logger from 'redux-logger'
import rootReducer from "./reducers";
import rootSaga from "./saga/rootSaga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);
export default store;