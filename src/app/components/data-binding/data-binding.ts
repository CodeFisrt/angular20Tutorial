import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

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

  userSrv = inject(UserService)

  constructor() {
    this.userSrv.$roleBehvaiour.subscribe((res:string)=>{
      debugger;
    })
    this.userSrv.$roleSub.subscribe((res:string)=>{
      debugger;
    })
  }

  getUser() {
    this.userSrv.getUserById(this.userId).subscribe((res:any)=>{
      debugger;
    })
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
