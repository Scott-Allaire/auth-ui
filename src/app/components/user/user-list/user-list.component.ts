import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Page } from 'src/app/models/page.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy {
  public userPage: Page<User> | undefined;
  storeSub: Subscription | undefined;

  faMinusCircle = faMinusCircle;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.storeSub = this.userService.stateChanged.subscribe((state) => {
      if (state) {
        this.userPage = state.users;
      }
    });
    this.userService.fetchUsers();
  }

  ngOnDestroy(): void {
    this.storeSub?.unsubscribe();
  }

  remove(id: number) {
    this.userService.remove(id).subscribe(() => this.userService.fetchUsers());
  }
}
