import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import { combineReducers } from 'redux';
import { rootReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), sagaMiddleware];
export const store = configureStore({
  reducer: combineReducers(rootReducer),
  middleware: middleware,
  devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(saga);
