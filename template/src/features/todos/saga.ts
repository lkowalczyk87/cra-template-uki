// import { ApiMethods } from 'features/api';
// import { ApiResponse } from 'features/api/models';
import { apiCall } from 'features/api/saga';
import { put, select, takeEvery } from 'redux-saga/effects';
import { fetchAllTodos, initTodos, setTodos } from './todosSlice';
import * as api from './api';
import { FetchTodosApiResponse, Todos, TodosApiLoaders } from './models';
import { getTodosCount } from './selectors';

function* handleInitTodos(action: ReturnType<typeof initTodos>) {
  const todosCount: number = yield select(getTodosCount);

  if (todosCount === 0) {
    yield put(fetchAllTodos());
  }
}

function* handleFetchAllTodos(action: ReturnType<typeof fetchAllTodos>) {
  const response: FetchTodosApiResponse = yield apiCall({
    apiHandlerOptions: {
      loader: TodosApiLoaders.FetchAll,
      errorMessage: 'asd',
    },
    apiCall: api.fetchAllTodos,
    args: [],
  });

  if (!response.data || response.errors !== undefined) return;

  const todos: Todos = response.data?.reduce(
    (acc, item) => ({ ...acc, [item.id]: item }),
    {}
  );

  yield put(setTodos(todos));
}

export default function* todosSaga() {
  yield takeEvery(fetchAllTodos.type, handleFetchAllTodos);
  yield takeEvery(initTodos.type, handleInitTodos);
}
