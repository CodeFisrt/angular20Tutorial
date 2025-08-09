import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  users: string[] = ['User 1', 'User 2', 'User 3'];
}
