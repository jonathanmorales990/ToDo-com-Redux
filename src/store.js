import todoReducer from './reducers/todo';


import { combineReducers, createStore  } from 'redux';

const reducers = combineReducers({
    
    todoReducer: todoReducer

});

const store = createStore(reducers);

export default store;