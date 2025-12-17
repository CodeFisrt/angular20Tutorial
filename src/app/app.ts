import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { ControlFlow } from './components/control-flow/control-flow';
import { Master } from './services/master';

@Component({
  selector: 'app-root',
  imports: [ControlFlow, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular20Tutorial';
  // loggedUserName: string = '';

  router = inject(Router);

  constructor(private masterService: Master) {
    // this.readLoggedData();
    // this.masterService.onLogin.subscribe(res => {
    //   this.readLoggedData();
    // })
    this.router.events.subscribe((res:any)=>{
      
     
    })

  }

  // readLoggedData() {
  //   const loggedData = localStorage.getItem("angular20User");
  //   if (loggedData != null) {
  //     this.loggedUserName = loggedData;
  //   }
  // }

  // onLogOfff() {
  //   localStorage.removeItem("angular20User");
  //   this.readLoggedData();
  //   this.loggedUserName = '';
  // }
}
