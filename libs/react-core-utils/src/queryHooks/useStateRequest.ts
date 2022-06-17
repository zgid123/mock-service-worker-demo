import { useState } from 'react';

import type { Dispatch, SetStateAction } from 'react';
import type {
  MutationFunction,
  UseMutationResult,
  UseMutationOptions,
} from 'react-query';

import { useRequest } from './useRequest';

import type { TFunc, TIsUnknownOrAny, IErrorProps } from './interface';

interface IUseStateRequestOptionsProps<
  TData,
  TOnFormatData,
  TDefaultValue,
  IErrorProps,
  TVariables,
  TContext,
> extends UseMutationOptions<TData, IErrorProps, TVariables, TContext> {
  defaultValue?: TDefaultValue;
  onFormat?: TFunc<TOnFormatData, TData>;
}

interface IUseStateRequestReturnProps<
  TData,
  TOnFormatData,
  TDefaultValue,
  IErrorProps,
  TVariables,
  TContext,
> extends Omit<
    UseMutationResult<TData, IErrorProps, TVariables, TContext>,
    'data'
  > {
  data: TIsUnknownOrAny<TOnFormatData> extends true
    ? TIsUnknownOrAny<TDefaultValue> extends true
      ? TData | undefined
      : TData
    : TDefaultValue extends Partial<TOnFormatData>
    ? TOnFormatData
    : TOnFormatData | undefined;
  setData: Dispatch<
    SetStateAction<
      TIsUnknownOrAny<TOnFormatData> extends true ? TData : TOnFormatData
    >
  >;
}

export const useStateRequest = <
  TData = unknown,
  TVariables = void,
  TContext = unknown,
  TOnFormatData = unknown,
  TDefaultValue = unknown,
>(
  mutationFunc: MutationFunction<TData, TVariables>,
  options: IUseStateRequestOptionsProps<
    TData,
    TOnFormatData,
    TDefaultValue,
    IErrorProps,
    TVariables,
    TContext
  > = {},
): IUseStateRequestReturnProps<
  TData,
  TOnFormatData,
  TDefaultValue,
  IErrorProps,
  TVariables,
  TContext
> => {
  type TUseState = TIsUnknownOrAny<TOnFormatData> extends true
    ? TData
    : TOnFormatData;
  const {
    onFormat,
    defaultValue = undefined,
    onSuccess,
    ...optionsProps
  } = options;

  const [data, setData] = useState<TUseState>(
    defaultValue as unknown as TUseState,
  );

  const result = useRequest(mutationFunc, {
    ...optionsProps,
    onSuccess: (data, ...params) => {
      setData((onFormat?.(data) || data) as TUseState);
      onSuccess?.(data, ...params);
    },
  });

  return { ...result, data, setData };
};
