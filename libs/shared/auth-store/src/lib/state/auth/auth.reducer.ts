import { createReducer, on } from '@ngrx/store';
import { UserInferface } from '../../../../../../models/user.model';
import {
  login,
  loginFailure,
  loginSuccess,
  register,
  registerFailure,
  setStoreData,
} from './auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  user: UserInferface | null;
  error: any;
  status: 'pending' | 'loading' | 'error' | 'success';
}
export const InitialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: '',
  status: 'pending',
};
export const authReducer = createReducer(
  InitialState,
  on(login, (state, { email, password }) => ({
    ...state,
    status: 'loading' as const,
  })),
  on(register, (state, { email, username, password }) => ({
    ...state,
    status: 'loading' as const,
  })),
  on(
    loginSuccess,
    (state, { username, email, token, expiresIn, isLogged }) => ({
      ...state,
      isAuthenticated: true,
      user: {
        email: email,
        username: username,
        token: token,
        expiresIn: expiresIn,
        isLogged: isLogged,
      },
      status: 'success' as const,
    })
  ),
  on(loginFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    error: error,
    status: 'error' as const,
  })),
  on(registerFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    error: error,
    status: 'error' as const,
  })),
  on(
    setStoreData,
    (state, { username, email, token, expiresIn, isLogged }) => ({
      ...state,
      isAuthenticated: true,
      user: {
        email: email,
        username: username,
        token: token,
        expiresIn: expiresIn,
        isLogged: isLogged,
      },
      status: 'success' as const,
    })
  )
);
