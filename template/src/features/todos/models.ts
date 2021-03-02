import { ApiResponse } from 'features/api/models';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface Todos {
  [key: string]: Todo;
}

export interface TodosState {
  allTodos: Todos;
}

export interface FetchTodosApiResponse extends ApiResponse {
  data?: Todo[];
}

export enum TodosApiLoaders {
  FetchAll = 'todos/fetchAll',
}
