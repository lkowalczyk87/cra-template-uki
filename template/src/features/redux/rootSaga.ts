import internalizationSaga from 'features/i18n/saga';
import todosSaga from 'features/todos/saga';
import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield fork(internalizationSaga);
  yield fork(todosSaga);
}
