 
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, inject, NgZone, OnInit, signal } from '@angular/core';
import { Alert } from '../../reusableComponent/alert/alert';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
  imports:[Alert],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None  
})
export class UserList implements OnInit ,AfterViewInit,DoCheck{ 
 

  productName  = "Mobile Product";

  productPrice = signal<number>(12000);

  myAlertTitle = "Succes";
  myAlertMessage = "Welcome User";
  http = inject(HttpClient)
  userList: any= [];

  constructor(private ng:NgZone,private cdRef: ChangeDetectorRef) {
    setTimeout(() => {
      this.productName = "Camrea Sony";
      //this.cdRef.detectChanges();
      
      setTimeout(() => {
        this.cdRef.markForCheck();
        this.productName = "aball pen";
      }, 6000);
    }, 5000);
    setTimeout(() => {
     // this.productPrice.set(19500)
    }, 20000);

    this.ng.runOutsideAngular(()=>{

    })
  }
  ngOnInit(): void {
    this.getUser()
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  getUser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res)=>{
      this.userList =  res;
    })
  }

  ChnageProduct() {
    this.productName = "Dell Laptop";
  }
 
  chnageTitkle() {
    this.myAlertTitle = "Error"
  }

   
}
