import { useQuery } from 'react-query';

import type { UseQueryResult, UseQueryOptions } from 'react-query';

import type {
  TAsyncFunc,
  IErrorProps,
  TQueryKeyParams,
  IPromiseWithCancel,
} from './interface';

export function useFetch<TData = unknown, TQueryFuncData = TData>(
  func: TAsyncFunc<TData>,
  key: TQueryKeyParams<TData, TAsyncFunc<TData>>,
  options: UseQueryOptions<
    TData,
    IErrorProps,
    TQueryFuncData,
    TQueryKeyParams<TData, TAsyncFunc<TData>>
  > = {},
): UseQueryResult<TQueryFuncData, IErrorProps> {
  if (!options.staleTime) {
    options.refetchOnWindowFocus = false;
  }

  return useQuery(
    key,
    ({ queryKey }) => {
      const castedPromise = func(
        ...(queryKey[1] as unknown[]),
      ) as unknown as IPromiseWithCancel<TData>;

      castedPromise.cancel = () => {
        castedPromise.cancelTokenSource.cancel('Cancel request by React Query');
      };

      return castedPromise;
    },
    {
      retry: false,
      ...options,
    },
  );
}
