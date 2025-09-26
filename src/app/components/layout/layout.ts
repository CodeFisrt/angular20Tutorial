import { Component, inject } from '@angular/core';
import { Master } from '../../services/master';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-layout',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

  loggedUserName: string = '';
  router= inject(Router)
  userSrv  = inject(UserService);
  counter: number = 4;

  constructor(private masterService: Master) {
    this.masterService.currentCounter =  this.counter;
    this.readLoggedData();
    this.masterService.onLogin.subscribe(res => {
      this.readLoggedData();
    })

  }

  onDecremtn() {
    this.counter --;
    this.masterService.$currentCounterSubject.next( this.counter)
    this.masterService.$curretCouneteBehvaiourSub.next(this.counter)
  }

  onIncrement() {
    this.counter ++;
    this.masterService.$currentCounterSubject.next( this.counter)
        this.masterService.$curretCouneteBehvaiourSub.next(this.counter)
  }

  onRoleChange(event: any) {
    debugger;
    this.userSrv.$roleBehvaiour.next(event.target.value)
    this.userSrv.$roleSub.next(event.target.value)
  }

  readLoggedData() {
    const loggedData = localStorage.getItem("angular20User");
    if (loggedData != null) {
      this.loggedUserName = loggedData;
    }
  }

  onLogOfff() {
    localStorage.removeItem("angular20User");
    this.readLoggedData();
    this.loggedUserName = '';
    this.router.navigateByUrl('/login')
  }
}
