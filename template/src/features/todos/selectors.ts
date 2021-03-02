import { createSelector } from '@reduxjs/toolkit';
import { getLoaderes } from 'features/api/selectors';
import { RootState } from 'features/redux/store';
import { TodosApiLoaders } from './models';

export const getTodosSlice = createSelector(
  (state: RootState) => state.todos,
  (todos) => todos
);

export const getAllTodos = createSelector(
  getTodosSlice,
  (todos) => todos.allTodos
);

export const getAllTodosArray = createSelector(getAllTodos, (allTodos) =>
  Object.values(allTodos)
);

export const getTodosCount = createSelector(
  getAllTodosArray,
  (todosArray) => todosArray.length
);

export const getAllTodosIsLoading = createSelector(
  getLoaderes,
  (loaders) => !!loaders[TodosApiLoaders.FetchAll]
);
