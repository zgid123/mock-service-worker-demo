/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosError, AxiosResponse } from 'axios';

import type { IErrorProps } from './interface';

export function parseData({ data }: AxiosResponse): any {
  return data.data;
}

export function parseError(error: AxiosError): Promise<IErrorProps> {
  const { name, message, response } = error;
  const { data, status = 500 } = response || {};
  const isNetworkError = name === 'Error' && message === 'Network Error';

  return Promise.reject({
    name,
    data,
    status,
    message,
    isNetworkError,
  });
}
