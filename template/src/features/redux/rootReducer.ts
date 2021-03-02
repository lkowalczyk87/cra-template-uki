import { combineReducers } from '@reduxjs/toolkit';
import todosSlice from 'features/todos/todosSlice';
import apiSlice from 'features/api/apiSlice';

const rootReducer = combineReducers({
  todos: todosSlice,
  api: apiSlice,
});

export default rootReducer;
