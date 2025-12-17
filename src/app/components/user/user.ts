import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';
import { GridColumn, MyTable } from "../../reusableComponent/my-table/my-table";

@Component({
  selector: 'app-user',
  imports: [FormsModule, MyTable],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {

  userList: any[] = [];

  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  };
  columnList: GridColumn[] = [
    { fieldName: 'emailId', headerText: 'Email' },
    { fieldName: 'fullName', headerText: 'Full Name' },
    { fieldName: 'mobileNo', headerText: 'Contact No' },
    { fieldName: 'password', headerText: 'Password' }
  ]


  http = inject(HttpClient);

  masterService = inject(Master);

  // constructor(private master: Master) {

  // }

  ngOnInit(): void {
    this.getUsers();
    
    const result =   this.masterService.getSum(12,50);
    const appData =  this.masterService.appName;
  }


  getUsers() {
    // this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res: any) => {
    //   this.userList = res;
    // });
    
    this.masterService.getUsers().subscribe((res:any)=>{
       
      this.userList = res;
    })
  }

  onSaveUser() {
    
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj).subscribe({
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
  onReset() {
    this.userObj = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    };
  }
  onUpdateUser() {
    //this.userObj.createdDate =  new Date();
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + this.userObj.userId, this.userObj).subscribe({
      next: () => {
        alert("User Updated Success");
        this.getUsers()
      },
      error: (error) => {
        alert("Errro -" + error.error)
      }
    })
  }

  onDeleteUser(item: any) { 
    
    const isDelet = confirm("Are you sure want to Delete");
    if (isDelet) {
      this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=" + item.userId).subscribe({
        next: () => {
          alert("User Delete Success");
          this.getUsers()
        },
        error: (error) => {
          alert("Errro -" + error.error)
        }
      })
    }

  }

  onEdit(item: any) {
      
    this.userObj = item;
  }

}
