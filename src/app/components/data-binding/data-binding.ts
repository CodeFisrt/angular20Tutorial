import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Master } from '../../services/master';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {

  courseName: string = "Angular 20 Tutorial";

  productPrice: number = 12500;
  userId: number =  0;

  maxlength: number = 5;

  minChar: number = 3;

  inputType: string = "checkbox";

  myClassName: string = "myColor";

  // userSrv = inject(UserService)
  // masterSrv = inject(Master)

  num1: number = 0;
  num2: number = 0;

  result: number = 0;


  curretCounter = 0;
  constructor() {
    // this.masterSrv.$currentCounterSubject.subscribe(res=>{
    //   debugger;
    //   this.curretCounter = res;
    // })
    // this.masterSrv.$curretCouneteBehvaiourSub.subscribe(res=>{
    //   debugger;
    //   this.curretCounter = res;
    // })
  }

  addTwoNo() {
    debugger;
    this.result =  this.num1 +  this.num2;
  }

  readValueFromService() {
    debugger;
    //this.curretCounter =  this.masterSrv.currentCounter;
  }

  getUser() {
    // this.userSrv.getUserById(this.userId).subscribe((res:any)=>{
    //   debugger;
    // })
  }

  showWelcomeMessage() {
    alert("Welcome to Angular 20")
  }
  changeCourseName() {
    this.courseName = "Reactjs Tutorial"
  }

  onCityChange() {
    alert("City Chnaged")
  }
}
