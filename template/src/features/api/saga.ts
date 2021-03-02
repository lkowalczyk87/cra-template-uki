import { call, put } from 'redux-saga/effects';
import {
  finishApiRequestWithError,
  finishApiRequestWithSuccess,
  startApiRequest,
} from './apiSlice';
import { ApiError, ApiHandlerParams, ApiResponse } from './models';

export function* apiCall<Fn extends (...args: any[]) => any>({
  apiHandlerOptions,
  apiCall,
  args,
}: ApiHandlerParams<Fn>): Generator<any, ApiResponse, any> {
  yield put(startApiRequest(apiHandlerOptions.loader));

  try {
    const apiResponse: any = yield call(apiCall, ...args);
    if (apiHandlerOptions.feedback === 'none') return apiResponse;

    yield put(
      finishApiRequestWithSuccess({
        loader: apiHandlerOptions.loader,
        successMessage: apiHandlerOptions.successMessage,
      })
    );

    const result: ApiResponse = { data: apiResponse };

    return result;
  } catch (error) {
    yield put(
      finishApiRequestWithError({
        loader: apiHandlerOptions.loader,
        errorMessage: apiHandlerOptions.errorMessage,
      })
    );

    const result: ApiResponse = {};

    if (error instanceof ApiError) {
      result.errors = error.errors;
    } else {
      result.errors = [
        { code: 'INTERNAL_FE_ERROR', message: ['Unknown error'], meta: {} },
      ];
    }

    return result;
  }
}
