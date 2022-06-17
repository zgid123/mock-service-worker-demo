import { clone } from 'ramda';
import { useRef } from 'react';
import { useInfiniteQuery } from 'react-query';

import type {
  QueryFunctionContext,
  UseInfiniteQueryResult,
  UseInfiniteQueryOptions,
} from 'react-query';

import type {
  TAsyncFunc,
  IErrorProps,
  TQueryKeyParams,
  IPromiseWithCancel,
} from './interface';

interface IUseInfiniteFetchOptionsProps<TData, TQueryFuncData>
  extends Omit<
    UseInfiniteQueryOptions<
      TData,
      IErrorProps,
      TQueryFuncData,
      TData,
      [string, unknown[]]
    >,
    'queryKey' | 'queryFn'
  > {
  recordPerPage: number;
  onFormatParams?: (
    parameters: unknown[],
    pageParam: QueryFunctionContext['pageParam'],
  ) => void;
}

export function useInfiniteFetch<TData = unknown, TQueryFuncData = TData>(
  func: TAsyncFunc<TData>,
  key: TQueryKeyParams<TData, TAsyncFunc<TData>>,
  {
    onSuccess,
    recordPerPage,
    onFormatParams,
    ...options
  }: IUseInfiniteFetchOptionsProps<TData, TQueryFuncData> = {
    recordPerPage: 20,
  },
): UseInfiniteQueryResult<TQueryFuncData, IErrorProps> {
  const pageRef = useRef({
    nextPage: 1,
    recordPerPage,
    currentPage: 0,
  });

  if (!options.staleTime) {
    options.refetchOnWindowFocus = false;
  }

  return useInfiniteQuery(
    key,
    ({ queryKey, pageParam = 1 }) => {
      const paramList = clone(queryKey[1]) as unknown[];

      onFormatParams?.(paramList, pageParam);

      const castedPromise = func(
        ...(paramList as unknown[]),
      ) as IPromiseWithCancel<TData>;

      castedPromise.cancel = () => {
        castedPromise.cancelTokenSource.cancel(
          'Cancel request by React Query Infinite Scroll',
        );
      };

      return castedPromise;
    },
    {
      onSuccess: (data) => {
        if (onSuccess) {
          onSuccess(data);

          pageRef.current = {
            ...pageRef.current,
            nextPage: pageRef.current.nextPage + 1,
            currentPage: pageRef.current.currentPage + 1,
          };
        }
      },
      getNextPageParam: (lastPage) => {
        if (!Array.isArray(lastPage)) {
          return undefined;
        }

        return lastPage.length < pageRef.current.recordPerPage
          ? undefined
          : pageRef.current.nextPage;
      },
      ...options,
    },
  );
}
