import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'features/redux/store';

export const getApi = createSelector(
  (state: RootState) => state.api,
  (api) => api
);

export const getLoaderes = createSelector(getApi, (api) => api.loaders);
