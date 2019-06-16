
import { createStore, applyMiddleware } from 'redux';

// redux-saga
import createSagaMiddleware from 'redux-saga';
import saga from '../sagas';

import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export default store

sagaMiddleware.run(saga);
