import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodosState, Todos, Todo } from './models';

const featureName = 'todos';

const initialState: TodosState = {
  allTodos: {},
};

const todosSlice = createSlice({
  name: featureName,
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<Todos>) {
      state.allTodos = action.payload;
    },
    setTodo(state, action: PayloadAction<Todo>) {
      state.allTodos[action.payload.id] = action.payload;
    },
  },
});

export const { setTodo, setTodos } = todosSlice.actions;

export const initTodos = createAction(`${featureName}/initTodos`);

export const fetchAllTodos = createAction(`${featureName}/fetchAllTodos`);

export default todosSlice.reducer;
