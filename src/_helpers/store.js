import { configureStore } from 'redux-starter-kit';
import { combineReducers } from 'redux';
import reducers from './reducers';

export const store = configureStore({
  reducer: combineReducers(reducers),
  devTools: process.env.NODE_ENV !== 'production'
});
