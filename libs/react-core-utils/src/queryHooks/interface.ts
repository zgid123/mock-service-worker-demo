/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CancelTokenSource } from 'axios';

export type TAsyncFunc<T> = (...params: any[]) => Promise<T>;

export type TFunc<TData, TVariables> = (data: TVariables) => TData;

export type TQueryKeyParams<
  T,
  P extends TAsyncFunc<unknown> = TAsyncFunc<T>,
> = Parameters<P> extends [] ? string | [string] : [string, Parameters<P>];

export type TIsUnknownOrAny<T> = T extends boolean | {}
  ? false
  : boolean extends boolean & T
  ? true
  : false;

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
