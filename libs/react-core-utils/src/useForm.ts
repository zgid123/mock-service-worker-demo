import { useForm as useRHForm } from 'react-hook-form';

export type { SubmitHandler } from 'react-hook-form';

export const useForm: typeof useRHForm = (params) => {
  return useRHForm({
    mode: 'all',
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    ...params,
  });
};
