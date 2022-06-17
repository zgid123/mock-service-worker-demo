import { useRef, useState } from 'react';
import { concat, mergeWithKey } from 'ramda';

import type { Dispatch, SetStateAction } from 'react';
import type {
  QueryFunctionContext,
  UseInfiniteQueryResult,
  UseInfiniteQueryOptions,
} from 'react-query';

import { useInfiniteFetch } from './useInfinityFetch';

import type {
  TAsyncFunc,
  IErrorProps,
  TIsUnknownOrAny,
  TQueryKeyParams,
} from './interface';

interface IUseStateInfiniteFetchReturnProps<TQueryFuncData, TDefaultValue>
  extends Omit<UseInfiniteQueryResult<TQueryFuncData, IErrorProps>, 'data'> {
  data: TIsUnknownOrAny<TDefaultValue> extends true
    ? TQueryFuncData | undefined
    : TDefaultValue extends Partial<TQueryFuncData>
    ? TQueryFuncData
    : TQueryFuncData | undefined;
  setData: Dispatch<SetStateAction<TQueryFuncData>>;
}

export interface IUseStateInfiniteFetchOptionsProps<
  TData,
  TQueryFuncData,
  TDefaultValue,
> extends Omit<
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
  defaultValue?: TDefaultValue;
  onFormat?: (data: TQueryFuncData) => TData;
  onFormatParams?: (
    parameters: unknown[],
    pageParam: QueryFunctionContext['pageParam'],
  ) => void;
}

export function useStateInfiniteFetch<
  TData = unknown,
  TQueryFuncData = TData,
  TDefaultValue = unknown,
>(
  func: TAsyncFunc<TData>,
  key: TQueryKeyParams<TData, TAsyncFunc<TData>>,
  options: IUseStateInfiniteFetchOptionsProps<
    TData,
    TQueryFuncData,
    TDefaultValue
  > = {} as IUseStateInfiniteFetchOptionsProps<
    TData,
    TQueryFuncData,
    TDefaultValue
  >,
): IUseStateInfiniteFetchReturnProps<TQueryFuncData, TDefaultValue> {
  const {
    onFormat,
    onSuccess,
    recordPerPage,
    onFormatParams,
    notifyOnChangePropsExclusions = ['data'],
    ...optionsProps
  } = options;
  const pageRef = useRef({
    nextPage: 1,
    recordPerPage,
    currentPage: 0,
  });
  const [data, setData] = useState<unknown[]>([] as unknown[]);

  const result = useInfiniteFetch(func, key, {
    ...optionsProps,
    recordPerPage,
    onFormatParams,
    notifyOnChangePropsExclusions,
    onSuccess: (data) => {
      onSuccess?.(data);
      const currentPageData = data.pages[pageRef.current.currentPage];

      if (!currentPageData) {
        return;
      }

      const formattedData =
        onFormat?.(currentPageData as TQueryFuncData) || currentPageData;

      setData((state) => {
        if (pageRef.current.currentPage === 0) {
          return formattedData;
        }

        if (Array.isArray(formattedData)) {
          return [...state, ...formattedData];
        }

        return mergeWithKey(
          (_, left, right) => {
            if (Array.isArray(left)) {
              return concat(left, right);
            }

            return right;
          },
          state,
          formattedData,
        );
      });
      pageRef.current = {
        ...pageRef.current,
        nextPage: pageRef.current.nextPage + 1,
        currentPage: pageRef.current.currentPage + 1,
      };
    },
    getNextPageParam: (lastPage) => {
      if (!Array.isArray(lastPage)) {
        return undefined;
      }

      return lastPage.length < recordPerPage
        ? undefined
        : pageRef.current.nextPage;
    },
  });

  return {
    ...result,
    data,
    setData,
  } as unknown as IUseStateInfiniteFetchReturnProps<
    TQueryFuncData,
    TDefaultValue
  >;
}
