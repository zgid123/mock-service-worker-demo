import { useMutation } from 'react-query';

import type {
  MutationFunction,
  UseMutationResult,
  UseMutationOptions,
} from 'react-query';

import type { IErrorProps } from './interface';

export const useRequest = <
  TData = unknown,
  TVariables = void,
  TContext = unknown,
>(
  mutationFunc: MutationFunction<TData, TVariables>,
  options?: UseMutationOptions<TData, IErrorProps, TVariables, TContext>,
): UseMutationResult<TData, IErrorProps, TVariables, TContext> => {
  return useMutation(mutationFunc, options);
};
