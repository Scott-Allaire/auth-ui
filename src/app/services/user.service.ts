import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';
import { Page } from 'src/app/models/page.model';
import { UserState } from '../state/user-state';
import { ObservableStore } from '@codewithdan/observable-store';
import { UserStoreActions } from '../state/user-store-actions';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ObservableStore<UserState> {
  private baseURI: string = environment.baseURI;

  constructor(private httpClient: HttpClient) {
    super({ trackStateHistory: true });
  }

  fetchUsers(): void {
    this.httpClient
      .get<Page<User>>(`${this.baseURI}/api/users`)
      .subscribe((users) => {
        this.setState({ users: users }, UserStoreActions.GetUsers);
      });
  }

  remove(userId: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.baseURI}/api/users/${userId}`);
  }
}
