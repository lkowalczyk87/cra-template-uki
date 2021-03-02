import { ApiLoaders, ApiResponseError } from '.';

export interface FinishApiRequestWithSuccess {
  loader: ApiLoaders;
  successMessage?: string;
}

export interface FinishApiRequestWithError {
  loader: ApiLoaders;
  errorMessage?: string;
  errors?: ApiResponseError[];
}
