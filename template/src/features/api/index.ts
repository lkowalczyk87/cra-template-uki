import axios from 'axios';
import {
  ApiBaseRequestParams,
  ApiError,
  ApiMethods,
  ApiRequestParams,
} from './models';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const apiBaseRequest = async ({
  method,
  endpoint,
  baseUrl,
  data,
  params,
}: ApiBaseRequestParams) => {
  try {
    const response = await axios({
      method,
      url: `${baseUrl || BASE_URL}/${endpoint}`,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    const apiError = new ApiError('', error.response.data.errors ?? []);

    throw apiError;
  }
};

export const apiGet = ({
  endpoint,
  baseUrl,
  data,
  params,
}: ApiRequestParams) => {
  return apiBaseRequest({
    method: ApiMethods.GET,
    endpoint,
    baseUrl,
    data,
    params,
  });
};
