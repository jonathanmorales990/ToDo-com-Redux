import todoReducer from './reducers/todo';
import { combineReducers, createStore  } from 'redux';

const reducers = combineReducers({ todoReducer });

const store = createStore(reducers);

export default store;
