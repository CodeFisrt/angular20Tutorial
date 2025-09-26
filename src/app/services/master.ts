import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Master {

  appName: string = "Angular App";

  onLogin: Subject<boolean> = new Subject<boolean>();

  currentCounter: number = 0;

  $currentCounterSubject: Subject<number> = new Subject< number>;
  
  $curretCouneteBehvaiourSub: BehaviorSubject<number> = new BehaviorSubject<number>(0)



  constructor(private http: HttpClient) { }

  getSum(num1: number, num2: number) {
    debugger;
    const result = num1 + num2;
    return result;
  }

  getUsers() {
    debugger;
    return this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers")
  }

  getJsonUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
     
      map((userList: any) => userList.map((user: any) => {
        return { id: user.id, name: user.name }
      })),
       tap(userlist=>{
        debugger;
      })
    );
  }

  getSingleUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/users/2").pipe(
      map((userData: any) => userData.address)
    );
  }




}
