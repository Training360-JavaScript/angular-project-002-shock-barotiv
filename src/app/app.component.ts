import { UserService } from './service/user.service';
import { Component } from '@angular/core';
import { User } from './model/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  constructor(private userService: UserService) { }

  users: User[] = this.userService.list;
  currentUser: User = new User();

  selectUserClick(user: User): void {
    this.currentUser = user;
  }

  updateUserClick(user: User): void {
    this.userService.updateUser(user)
  }

  deleteUserClick(user: User): void {
    this.userService.removeUser(user);
  }
}

