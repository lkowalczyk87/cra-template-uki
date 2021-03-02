import { takeEvery } from 'redux-saga/effects';
import { setLanguage } from './internalizationSlice';
import i18n from 'features/i18n';

function handleSetLanguage(action: ReturnType<typeof setLanguage>) {
  i18n.changeLanguage(action.payload);
}

export default function* internalizationSaga() {
  yield takeEvery(setLanguage.type, handleSetLanguage);
}
