import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FinishApiRequestWithError,
  FinishApiRequestWithSuccess,
} from './models/actions';
import { ApiLoaders, ApiState } from './models';

const featureName = 'api';

const initialState: ApiState = {
  apiHandlerPopUpIsOpen: false,
  loaders: {},
};

const apiHandler = createSlice({
  name: featureName,
  initialState,
  reducers: {
    startApiRequest(state, action: PayloadAction<ApiLoaders>) {
      state.loaders[action.payload] = true;
    },
    finishApiRequestWithSuccess(
      state,
      action: PayloadAction<FinishApiRequestWithSuccess>
    ) {
      state.loaders[action.payload.loader] = false;
      state.apiHandlerPopUpIsOpen = !!action.payload.successMessage;
      state.successMessage = action.payload.successMessage;
    },
    finishApiRequestWithError(
      state,
      action: PayloadAction<FinishApiRequestWithError>
    ) {
      state.loaders[action.payload.loader] = false;
      state.apiHandlerPopUpIsOpen = !!action.payload.errorMessage;
      state.errorMessage = action.payload.errorMessage;
      state.errors = action.payload.errors;
    },
  },
});

export const {
  startApiRequest,
  finishApiRequestWithSuccess,
  finishApiRequestWithError,
} = apiHandler.actions;

export default apiHandler.reducer;
