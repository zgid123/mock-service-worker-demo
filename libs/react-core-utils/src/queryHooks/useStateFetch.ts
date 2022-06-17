import { useState } from 'react';

import type { Dispatch, SetStateAction } from 'react';
import type { UseQueryResult, UseQueryOptions, QueryKey } from 'react-query';

import { useFetch } from './useFetch';

import type {
  TAsyncFunc,
  IErrorProps,
  TQueryKeyParams,
  TIsUnknownOrAny,
} from './interface';

type TUseStateFetchReturnProps<TQueryFuncData, TDefaultValue> = Omit<
  UseQueryResult<TQueryFuncData, IErrorProps>,
  'data'
> & {
  data: TIsUnknownOrAny<TDefaultValue> extends true
    ? TQueryFuncData | undefined
    : TDefaultValue extends Partial<TQueryFuncData>
    ? TQueryFuncData
    : TQueryFuncData | undefined;
  setData: Dispatch<SetStateAction<TQueryFuncData>>;
};

interface IUseStateFetchOptionsProps<
  TData,
  TQueryFuncData,
  TDefaultValue,
  TQueryKey extends QueryKey,
> extends UseQueryOptions<TData, IErrorProps, TQueryFuncData, TQueryKey> {
  defaultValue?: TDefaultValue;
}

export function useStateFetch<
  TData = unknown,
  TQueryFuncData = TData,
  TDefaultValue = unknown,
>(
  func: TAsyncFunc<TData>,
  key: TQueryKeyParams<TData, TAsyncFunc<TData>>,
  options: IUseStateFetchOptionsProps<
    TData,
    TQueryFuncData,
    TDefaultValue,
    TQueryKeyParams<TData, TAsyncFunc<TData>>
  > = {},
): TUseStateFetchReturnProps<TQueryFuncData, TDefaultValue> {
  const {
    select,
    onSuccess,
    defaultValue,
    notifyOnChangePropsExclusions = ['data'],
    ...optionsProps
  } = options;
  const [data, setData] = useState<TQueryFuncData>(
    defaultValue as unknown as TQueryFuncData,
  );

  const result = useFetch(func, key, {
    ...optionsProps,
    notifyOnChangePropsExclusions,
    onSuccess: (data) => {
      setData(select?.(data as unknown as TData) || data);
      onSuccess?.(data);
    },
  });

  return { ...result, data, setData };
}
