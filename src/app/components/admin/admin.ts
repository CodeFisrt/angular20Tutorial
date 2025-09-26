import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, signal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataBinding } from '../data-binding/data-binding';
import { PipeEx } from '../pipe-ex/pipe-ex';
import { Master } from '../../services/master';
import { EmployeeService } from '../../services/employee-service';
import { Tooltip } from '../../directive/tooltip';
import { Alert } from '../../reusableComponent/alert/alert';

@Component({
  selector: 'app-admin',
  imports: [DataBinding,PipeEx,Tooltip,Alert],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Admin implements OnDestroy {

  firstName = "Chetan";
  alertText = "Welocme to Admin PAge"



  isDivVisisbale = false;
  rollNo =  112;
  curretCounter = 0;

  empService  = inject(EmployeeService);

  masterServ = inject(Master);//16

  subscriptionList: Subscription [] = [];
  courseName = "Angular 20 Tutorial";
  courseDuartion = signal<string>("3 Months");
  chnageCouserNAme() {
    this.courseName = "React"
  }

  constructor(private http: HttpClient,private changeDet: ChangeDetectorRef) {

    setTimeout(() => {
      this.courseName = "React js Tutotirl";
      
      setTimeout(() => {
        this.courseDuartion.set("5 Month and 2 Weeks")
      }, 3000);
      debugger;
    }, 4000);
    //this.getUsers()
   // this.empService.showMessage();
    this.empService.set('city', 'Pune');
    this.curretCounter = this.masterServ.currentCounter;
     this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res)=>{

    })
    this.subscriptionList
   const countSub$ = this.masterServ.$currentCounterSubject.subscribe(res=>{
      debugger;
      this.curretCounter = res;
    })
    this.subscriptionList.push(countSub$)

    this.masterServ.$curretCouneteBehvaiourSub.subscribe(res=>{
      debugger;
      this.curretCounter = res;
    })

    // const data$ =  new Observable<string>( res =>{
    //   debugger;
    //   if(this.rollNo %2 == 0 ) {
    //     res.next("No Is Even")
    //   } else {
    //     res.error("No Is Odd")
    //   }
    // })

    // data$.subscribe((res)=>{
    //   debugger;
    // },error=>{
    //   debugger;
    // })

  }

  readData() {
    const cityName = this.empService.get('city')
    debugger;
  }

  getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
      return result.json()
    }).then((userList)=>{
      debugger;
    })
  }

  divclickevent() {
    console.log("divclickevent")
  }

  btnClickEvent(event:MouseEvent) {
    debugger
    this.firstName = "Ram";
console.log("btnClickEvent")
event.stopPropagation()
  }

  ngOnDestroy(): void {
    this.subscriptionList.forEach(element => {
      element.unsubscribe()
    });
  }

}
