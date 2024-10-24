import { createSelector } from '@ngrx/store';
import { AppAuthState } from './auth.state';
import { AuthState } from './auth.reducer';

export const selectAuthState = (state: AppAuthState) => state.authAppState;
export const selectIsAuthenticatedState = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);
export const selectUserInfroState = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);
