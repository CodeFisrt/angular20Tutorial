import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, signal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataBinding } from '../data-binding/data-binding';
import { PipeEx } from '../pipe-ex/pipe-ex';
import { Master } from '../../services/master';
import { EmployeeService } from '../../services/employee-service';
import { Tooltip } from '../../directive/tooltip';
import { Alert } from '../../reusableComponent/alert/alert';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MasterService } from '../../services/master-service';

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

  userService = inject(UserService);//16

  subscriptionList: Subscription [] = [];
  courseName = "Angular 20 Tutorial";
  courseDuartion = signal<string>("3 Months");
  
  chnageCouserNAme() {
    this.courseName = "React"
  }

  activateRoute = inject(ActivatedRoute);
  masterService = inject(MasterService);

 

  constructor(private http: HttpClient,private changeDet: ChangeDetectorRef) {

      
    this.masterService.petName  ="Monkey"
   
    setTimeout(() => {
       debugger;
    const petNameFromService =  this.masterService.petName;// Monkey
    }, 7000);
    this.activateRoute.data.subscribe((res:any)=>{
      
    })
     
    setTimeout(() => {
      this.courseName = "React js Tutotirl";
      
      setTimeout(() => {
        this.courseDuartion.set("5 Month and 2 Weeks")
      }, 3000);
      
    }, 4000);
    //this.getUsers()
   // this.empService.showMessage();
    this.empService.set('city', 'Pune');
    this.curretCounter = this.masterServ.currentCounter;
     this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res)=>{

    })
    this.subscriptionList
   const countSub$ = this.masterServ.$currentCounterSubject.subscribe(res=>{
      
      this.curretCounter = res;
    })
    this.subscriptionList.push(countSub$)

    this.masterServ.$curretCouneteBehvaiourSub.subscribe(res=>{
      
      this.curretCounter = res;
    })

    // const data$ =  new Observable<string>( res =>{
    //   
    //   if(this.rollNo %2 == 0 ) {
    //     res.next("No Is Even")
    //   } else {
    //     res.error("No Is Odd")
    //   }
    // })

    // data$.subscribe((res)=>{
    //   
    // },error=>{
    //   
    // })

  }

  readData() {
    const cityName = this.empService.get('city')
    
  }

  getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
      return result.json()
    }).then((userList)=>{
      
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
