import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { GridColumn, MyTable } from "../../reusableComponent/my-table/my-table";

@Component({
  selector: 'app-get-api',
  imports: [MyTable],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetApi implements OnInit {

  http = inject(HttpClient);
  userList: any[] = [];
  todoList: any[] = [];
  busUserList: any[] = [];
  //columnList: string[]= ['name','website','username','email']
  columnList: GridColumn[] = [
    { fieldName: 'name', headerText: 'Name' },
    { fieldName: 'website', headerText: 'Website' },
    { fieldName: 'username', headerText: 'User Name' },
    { fieldName: 'email', headerText: 'Email-Id' }
  ]

  columnList2: GridColumn[] = [
    { fieldName: 'userId', headerText: 'User Id' },
    { fieldName: 'userName', headerText: 'UserName' },
    { fieldName: 'role', headerText: 'Role' },
    { fieldName: 'fullName', headerText: 'Full Name' }
  ]


  ngOnInit(): void {
    
    this.getUsers();
    this.getTodoItems();
    this.getAllBusBookignUsers();
  }

  getUsers() {
    
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      
      this.userList = result;
    })
  }

  getTodoItems() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((response: any) => {
      this.todoList = response;
    })
  }

  getAllBusBookignUsers() {
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers").subscribe((res: any) => {
      this.busUserList = res.data;
    })
  }
}
