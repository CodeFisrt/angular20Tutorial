import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Master {

  appName: string = "Angular App";

  onLogin: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getSum(num1: number, num2: number) {
    debugger;
    const result =  num1 + num2;
    return result;
  }

  getUsers() {
     debugger;
   return this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers")
  }




}
