import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppAuthState } from './auth.state';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,private store:Store<AppAuthState>,private) {}
}
