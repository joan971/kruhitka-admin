import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as UsersActions from './users.actions';
import * as UsersSelectors from './users.selectors';

@Injectable()
export class UsersFacade {
  // /**
  //  * Combine pieces of state using createSelector,
  //  * and expose them as observables through the facade.
  //  */
  // loaded$ = this.store.pipe(select(UsersSelectors.getUsersLoaded));
  // allUsers$ = this.store.pipe(select(UsersSelectors.getAllUsers));
  // selectedUsers$ = this.store.pipe(select(UsersSelectors.getSelected));

  currentUser$ = this.store.pipe(select(UsersSelectors.getUser))
  isAuthenticated$ = this.store.pipe(select(UsersSelectors.getUserIsAuth))

  constructor(private readonly store: Store) { }


  buildUserSession() {
    this.store.dispatch(UsersActions.buildUserSession());
  }
}
