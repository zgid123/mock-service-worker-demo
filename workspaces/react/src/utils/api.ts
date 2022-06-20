import { Api } from '@libs/core-utils/api';

Api.config({
  storage: localStorage,
  baseUrl: import.meta.env.VITE_API_ENDPOINT || '',
});

export const api = Api;
