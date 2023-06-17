const baseUrl = process.env.REACT_APP_SERVER_URL;

export const LOGIN_API_URL = `${baseUrl}/auth/login`;

export const TOKEN_API_URL = `${baseUrl}/token-refresh`; // no

export const USER_INFO_API_URL = `${baseUrl}/my-info`; // no

export const USER_LIST_API = `${baseUrl}/admin/list`;
