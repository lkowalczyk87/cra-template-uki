import { TodosApiLoaders } from 'features/todos/models';

export interface ApiState {
  successMessage?: string;
  errorMessage?: string;
  loaders: { [key in ApiLoaders]?: boolean };
  apiHandlerPopUpIsOpen: boolean;
  errors?: ApiResponseError[];
}

export type FeedbackVariant = 'popup' | 'toast' | 'none';

export enum DummyApiLoader {
  get = 'dummy/get',
}

export type ApiLoaders = TodosApiLoaders | DummyApiLoader;

export interface ApiHandlerOptions {
  loader: ApiLoaders;
  successMessage?: string;
  errorMessage?: string;
  feedback?: FeedbackVariant;
}

export interface ApiHandlerParams<Fn extends (...args: any[]) => any> {
  apiHandlerOptions: ApiHandlerOptions;
  apiCall: Fn;
  args: Parameters<Fn>;
}

export interface ApiResponseError {
  code: string;
  meta: { [key: string]: string };
  message: string[];
}

export interface ApiResponse {
  data?: any;
  errors?: ApiResponseError[];
}

export enum ApiMethods {
  GET = 'GET',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  PURGE = 'PURGE',
  LINK = 'LINK',
  UNLINK = 'UNLINK',
}

export interface ApiRequestParams {
  endpoint: string;
  baseUrl?: string;
  data?: object;
  params?: object;
}

export interface ApiBaseRequestParams extends ApiRequestParams {
  method: ApiMethods;
}

export class ApiError extends Error {
  errors?: ApiResponseError[];

  constructor(message: string, errors: ApiResponseError[]) {
    super(message);

    this.errors = errors;
  }
}
