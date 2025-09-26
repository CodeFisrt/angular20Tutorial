import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
  imports:[NgFor]
})
export class UserList { 
users = [
  { id: 1, name: 'One' },
  { id: 2, name: 'Two' },
  { id: 3, name: 'Three' }
];
  random() {
    return Math.floor(Math.random() * 1000);
  }

  trackById(index: number, item: any) {
  return item.id;
}

  chnageVal() {
    this.users = [...this.users.reverse()];
  }
}
