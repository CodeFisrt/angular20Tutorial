import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, map, Subject, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {

  $courseDuration = new BehaviorSubject<string>("2 Months");

  $roleBehvaiour = new BehaviorSubject<string>("");

  $roleSub = new Subject<string>();

  private userDetails = new Map<number, Observable<any>>();


  constructor(private http: HttpClient) { }

  // getUserById(id: number) {
  //   return this.http.get("https://jsonplaceholder.typicode.com/users/" +id);
  // }
 
  getUserById(id: number):any | undefined  {
    debugger;
    if (!this.userDetails.has(id)) {
      const userDataObs = this.http.get("https://jsonplaceholder.typicode.com/users/" + id).pipe(
        shareReplay(1)
      );
      this.userDetails.set(id, userDataObs);
    }
    return this.userDetails.get(id);
  }

  // Example method to get user data
  getUser() {
    // Replace with actual user fetching logic
    return {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
  }

  ngOnDestroy(): void {
    debugger;
    console.log("User service")
  }
}
