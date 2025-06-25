import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Master {

  appName: string = "Angular App";

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
