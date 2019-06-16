
import { createStore, applyMiddleware } from 'redux';

// redux-saga
import createSagaMiddleware from 'redux-saga';
import saga from '../sagas';

import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();

export default store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);
