import { createStore, compose, applyMiddleware } from 'redux';

import createSaga from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSaga();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default store;