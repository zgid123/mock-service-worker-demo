import Axios from 'axios';
import { stringifyUrl } from 'query-string';
import { isEmpty, isNil, reject } from 'ramda';
import { AuthService } from '@libs/auth-services';

import { parseData, parseError } from './helpers';

import type {
  TObject,
  TGetParams,
  IRequestBody,
  IRequestProps,
  IOptionsParams,
  IOptionsResult,
  IRequestParams,
  IPromiseWithCancel,
} from './interface';

interface IConfigurationProps {
  ssr?: boolean;
  baseUrl: string;
  storage?: Storage;
  requiredAuth?: boolean;
}

export class Api {
  static #ssr: boolean;
  static #apiEndpoint: string;
  static #authService: typeof AuthService;
  static #requiredAuth: boolean | undefined;

  static CancelToken = Axios.CancelToken;

  public static config({
    baseUrl,
    storage,
    ssr = false,
    requiredAuth,
  }: IConfigurationProps) {
    this.#ssr = ssr;
    this.#apiEndpoint = baseUrl;
    this.#authService = AuthService;
    this.#requiredAuth = requiredAuth;

    this.#authService.config({
      storage,
    });
  }

  static #options({ requiredAuth, headers = {} }: IOptionsParams) {
    let options = {} as IOptionsResult;
    const authToken = this.#authService?.token?.();

    if (requiredAuth && authToken) {
      options = {
        ...options,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
    }

    options.headers = { ...(options.headers as TObject), ...headers };

    return options;
  }

  static async #request({
    data,
    params,
    headers,
    endpoint,
    version = 1,
    method = 'get',
    onUploadProgress,
    cancelTokenSource,
    isExternal = false,
    requiredAuth = true,
  }: IRequestProps & IRequestBody & IRequestParams) {
    const cancelSource = cancelTokenSource || this.CancelToken.source();

    if (typeof endpoint !== 'string') {
      endpoint = stringifyUrl(
        {
          url: endpoint.url,
          query: reject(isNil, endpoint.query || {}),
        },
        {
          arrayFormat: 'bracket',
        },
      );
    }

    let url = endpoint.replace(/^\//, '');

    if (!isExternal) {
      url = `${this.#apiEndpoint}/v${version}/${url}`;
    }

    const promise = Axios.request({
      ...reject(
        (value) => !(!this.#ssr && value instanceof FormData) && isEmpty(value),
        {
          url,
          data,
          params,
          method,
        },
      ),
      ...this.#options({ requiredAuth, headers }),
      onUploadProgress,
      cancelToken: cancelSource.token,
    })
      .then(parseData)
      .catch(parseError);

    (promise as IPromiseWithCancel).cancelTokenSource = cancelSource;

    return promise;
  }

  public static get<T>(options: TGetParams): Promise<T> {
    return this.#request({ method: 'get', ...options });
  }

  public static post<T>(
    options: Omit<IRequestProps, 'method'> & IRequestBody,
  ): Promise<T> {
    return this.#request({ method: 'post', ...options });
  }

  public static put<T>(
    options: Omit<IRequestProps, 'method'> & IRequestBody,
  ): Promise<T> {
    return this.#request({ method: 'put', ...options });
  }

  public static delete<T>(
    options: Omit<IRequestProps, 'method'> & IRequestBody,
  ): Promise<T> {
    return this.#request({ method: 'delete', ...options });
  }
}
