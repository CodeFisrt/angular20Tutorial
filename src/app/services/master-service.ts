import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  petName: string = "Tiger";
  userDta:any;

  http= inject(HttpClient);

  getUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      map((m:any)=> m.map((item:any )=> ({id:item.id, userName: item.username})))
    )
  }
  

  getUserById() {
    return this.http.get("https://jsonplaceholder.typicode.com/users/2").pipe(
      retry(3),
      tap((oriData:any)=>  {
        debugger;
        this.userDta = oriData;
      }),
      map((result:any)=> result.address)
    )
  }
 
}
