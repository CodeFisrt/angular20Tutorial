import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, Subscription, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  imports: [AsyncPipe],
  templateUrl: './unsubscribe.html',
  styleUrl: './unsubscribe.css'
})
export class Unsubscribe implements OnInit, OnDestroy {

  userList: any[] = [];
  http = inject(HttpClient);
  //way-1
  subscription!: Subscription;
  //way 2
  subscriptionList: Subscription[] = [];
  //way 3
  subTakeUntil!: Subject<void>;

  //way -4 take 

  //way 5 using async pipe

  userList$ = new Observable<any[]>

  timeInterval! :Observable<any>;
  cuurentIntevale: number = 0;
  stopTimer: Subject<void> = new Subject<void>;


  ngOnInit(): void { 
    this.timeInterval =  interval(1000);


    this.userList$ = this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");
    this.getUsers();
    //this.getPosts();
  }

  startIntervale() {
    this.timeInterval.pipe(
      take(5)
    ).subscribe(num=>{
      debugger;
      this.cuurentIntevale =  num;
    })
  }
  stopInterval() {
    this.stopTimer.next()
  }

  // getUsers() {
  //   this.subscription =  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
  //     this.userList =  res;
  //   })
  // }

  // getUsers() {
  //   this.subscriptionList.push(this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
  //     this.userList = res;
  //   })
  //   )
  // }

  // getPosts() {
  //   const sub =  this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((Res: any) => {

  //   })
  //   this.subscriptionList.push(sub)
  // }

  // getUsers() {
  //   this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
  //     takeUntil(this.subTakeUntil)
  //   ).subscribe((res:any)=>{

  //   })
  // }

   getUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      take(1)
    ).subscribe((res:any)=>{

    })
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subTakeUntil.next();
    this.subscriptionList.forEach(sub => {
      sub.unsubscribe();
    })
  }

}
