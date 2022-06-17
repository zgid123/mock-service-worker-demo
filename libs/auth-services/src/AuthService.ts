import { staticImplements } from './utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAuthService {}

interface IConfigProps {
  storage?: Storage;
}

interface IAuthServiceStatic {
  new (): IAuthService;
  clearToken: () => Promise<void>;
  token: () => Promise<string | null>;
  config: (props: IConfigProps) => void;
  clearRefreshToken: () => Promise<void>;
  refreshToken: () => Promise<string | null>;
  setToken: (params: string) => Promise<string>;
  setRefreshToken: (params: string) => Promise<string>;
}

@staticImplements<IAuthServiceStatic>()
export class AuthService {
  protected _storage?: Storage;
  protected _token: string | null = null;
  protected _refreshToken: string | null = null;

  protected static _instance: AuthService;

  protected static instance() {
    if (!this._instance) {
      this._instance = new this();
    }

    return this._instance;
  }

  public static config({ storage }: IConfigProps) {
    this.instance()._storage = storage;
  }

  public static token(): Promise<string | null> {
    return Promise.resolve(this.instance().token());
  }

  public static setToken(token: string): Promise<string> {
    return Promise.resolve(this.instance().setToken(token));
  }

  public static clearToken(): Promise<void> {
    return Promise.resolve(this.instance().clearToken());
  }

  public static refreshToken(): Promise<string | null> {
    return Promise.resolve(this.instance().refreshToken());
  }

  public static setRefreshToken(token: string): Promise<string> {
    return Promise.resolve(this.instance().setRefreshToken(token));
  }

  public static clearRefreshToken(): Promise<void> {
    return Promise.resolve(this.instance().clearRefreshToken());
  }

  protected token() {
    this._token = this._token || this._storage?.getItem('authToken') || null;

    return this._token;
  }

  protected setToken(token: string) {
    this._token = token;
    this._storage?.setItem('authToken', token);

    return this._token;
  }

  protected clearToken() {
    this._token = null;
    this._storage?.removeItem('authToken');
  }

  protected refreshToken() {
    this._refreshToken =
      this._refreshToken || this._storage?.getItem('refreshToken') || null;

    return this._refreshToken;
  }

  protected setRefreshToken(token: string) {
    this._refreshToken = token;
    this._storage?.setItem('refreshToken', token);

    return this._refreshToken;
  }

  protected clearRefreshToken() {
    this._refreshToken = null;
    this._storage?.removeItem('refreshToken');
  }
}
