export interface LoginType {
  email: string;
  password: string;
  autoLogin?: boolean;
}

export interface ParsedTokenType {
  grantType: string;
  admin: boolean;
  accessToken: string;
  refreshToken: string;
}

export interface DecodedTokenType {
  exp: number;
  iat: number;
  roles: string;
  sub: string;
  share_key: string;
}

export interface DecodedRefreshTokenType {
  iat: number;
  exp: number;
}
