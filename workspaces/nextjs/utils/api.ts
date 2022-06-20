import { Api } from '@libs/core-utils/api';

Api.config({
  ssr: true,
  requiredAuth: false,
  baseUrl: process.env.API_ENDPOINT || '',
});

export const api = Api;
