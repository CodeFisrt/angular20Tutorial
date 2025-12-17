import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { concatMap, exhaustMap, forkJoin, mergeMap, of, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-combine-obs',
  imports: [ReactiveFormsModule],
  templateUrl: './combine-obs.html',
  styleUrl: './combine-obs.css'
})
export class CombineObs {

  stateData$ = of(["Mp", "MH", "Goa"]);
  cityData$ = of(["Pune", "Nagpur", "Mumbai", "Solapur"]);

  http = inject(HttpClient);
  searchControl: FormControl = new FormControl();

  loginClick$ = new Subject<void>();

  constructor() {
    // this.searchControl.valueChanges.subscribe((search:string)=>{
    //   
    //   this.http.get("'https://dummyjson.com/products/search?q="+search).subscribe((res:any)=>{
    //     console.log("User res" + res)
    //   })
    // })
    this.searchControl.valueChanges.pipe(
      exhaustMap((search: string) => this.http.get("https://dummyjson.com/products/search?q=" + search))
    ).subscribe((res: any) => {
      console.log(res)
    })

    const $users = this.http.get("https://jsonplaceholder.typicode.com/users");
    const $posts = this.http.get("https://jsonplaceholder.typicode.com/asdsad");

    forkJoin([$users, $posts]).subscribe((res: any) => {
    }, error => {
    })

    forkJoin([this.stateData$, this.cityData$]).subscribe((res: any) => {

    })
    this.stateData$.subscribe((res: any) => {

    })
    this.cityData$.subscribe((res: any) => {

    })

    this.loginClick$.pipe(
      exhaustMap(() => {
        this
        return this.http.get("https://jsonplaceholder.typicode.com/users")
      })
    ).subscribe((res: any) => {
      console.log("asdas")
    })
  }

 

  onBtbClcik() {
    this.loginClick$.next();
  }



}
