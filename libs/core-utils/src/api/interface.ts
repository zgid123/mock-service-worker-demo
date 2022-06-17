/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosRequestConfig, CancelTokenSource } from 'axios';

export type TObject = Record<string, any>;

interface IEndpointProps {
  url: string;
  query?: {
    [key: string]: string | number | string[] | undefined;
  };
}

export type TEndpoint = string | IEndpointProps;

export interface IOptionsParams {
  requiredAuth: boolean;
  headers?: AxiosRequestConfig['headers'];
}

export interface IOptionsResult {
  [key: string]: string | TObject;
}

export interface IRequestProps {
  version?: number;
  endpoint: TEndpoint;
  isExternal?: boolean;
  requiredAuth?: boolean;
  cancelTokenSource?: CancelTokenSource;
  headers?: AxiosRequestConfig['headers'];
  method: 'get' | 'post' | 'put' | 'delete';
}

export interface IRequestBody {
  data?: TObject;
  onUploadProgress?: AxiosRequestConfig['onUploadProgress'];
}

export interface IRequestParams {
  params?: TObject;
}

export type TGetParams = IRequestParams &
  Exclude<Omit<IRequestProps, 'method'>, IRequestBody>;

export interface IErrorProps {
  name: string;
  status: number;
  detail: string;
  message: string;
  isNetworkError: boolean;
}

export interface IPromiseWithCancel<T = unknown> extends Promise<T> {
  cancel: () => void;
  cancelTokenSource: CancelTokenSource;
}
