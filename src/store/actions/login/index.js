import { LOGIN_ACTION_TYPES } from '../../types/login';

export const login = credentials => ({
  type: LOGIN_ACTION_TYPES.login,
  payload: { credentials }
});

export const logout = () => ({ type: LOGIN_ACTION_TYPES.logout });
