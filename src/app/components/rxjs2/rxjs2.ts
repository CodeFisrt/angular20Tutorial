import { Component, inject } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, of, switchMap } from 'rxjs';
import { MasterService } from '../../services/master-service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rxjs2',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs2.html',
  styleUrl: './rxjs2.css'
})
export class Rxjs2 {

  numberList$ = of([11, 22, 33, 44, 56, 6, 7, 8, 86, 4, 3, 22, 1, 34, 54]);

  number2List = of([1, 2, 3, 4, 5])
  masterSrv = inject(MasterService);

  userList: any[] = [];

  isLoader: boolean = false;

  searchControl: FormControl = new FormControl("aaa");

  http = inject(HttpClient);


  constructor() {
    this.numberList$.subscribe((res: number[]) => {
      const evenNoList = res.filter(m => m % 2 == 0);
      debugger;
    })
    this.numberList$
      .pipe(
        map(arr => arr.filter(n => n % 2 === 0))
      ).subscribe(result => {
      })

    this.number2List.pipe(
      map(m => m.map(ele => ele * 2))
    ).subscribe((result => {
    }))

    this.masterSrv.getUser().subscribe((res: any) => {
      this.userList = res;
    })
    this.masterSrv.getUserById().subscribe((res: any) => {
      debugger;
    })
    this.getSearchProduct();
  }

  getUser() {
    this.isLoader = true;
    this.masterSrv.getUser().subscribe((res: any) => {
      this.userList = res;
      this.isLoader = false;
    })
  }

  getSearchProduct() {
    // this.searchControl.valueChanges.subscribe((searchText:string)=>{
    //   debugger;
    //   this.http.get("https://dummyjson.com/products/search?q="+searchText).subscribe((Res:any)=>{
    //     debugger;
    //   })
    // })
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      filter((m:string)=> m.length > 3),
      distinctUntilChanged(),
      switchMap((searchText: string) =>
        this.http.get("https://dummyjson.com/products/search?q=" + searchText)
      )
    ).subscribe((searchText: any) => {
      debugger;

    })
  }
}
