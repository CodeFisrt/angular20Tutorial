import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmpBasic } from '../../const';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css'
})
export class ReactiveUser implements OnInit {
  
  userList: any[] = [];
  http = inject(HttpClient);

  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl("",[Validators.required,Validators.minLength(5),Validators.email]),
    password: new FormControl("",Validators.required),
    fullName: new FormControl(""),
    mobileNo : new FormControl(""),
    address:  new FormGroup({
      citty: new FormControl("")
    })
  });

  emploeyeBasicFomr: FormGroup =  new FormGroup({});


  ngOnInit(): void {
    EmpBasic.forEach(formData=>{
      const validationArray = [];
      if(formData.isRequired) {
        validationArray.push(Validators.required)
      }
      if(formData.minLength) {
         validationArray.push(Validators.minLength(formData.minLength))
      }
      
         const newControln =  new FormControl("",validationArray)
       
     
      this.emploeyeBasicFomr.addControl(formData.controlName,newControln)
    })
    this.getUsers()
  }
  addNumber = 3;

  getSum(num: number) {
    return  num + 3;
  }

  getSum2(num: number) {
    return num + this.addNumber;
  }



  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res: any) => {
      this.userList = res;
    });
  }
 onSaveUser() {
    
    const formValue =  this.userForm.value;
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", formValue).subscribe({
      next: (result) => {
        
        alert("User Created Success");
        this.getUsers()
      },
      error: (error) => {
        
        alert("Errro -" + error.error)
      }
    }
    )
  }
}
