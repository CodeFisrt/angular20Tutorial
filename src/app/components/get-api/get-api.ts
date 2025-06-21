import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetApi implements OnInit {

  http = inject(HttpClient);
  userList: any[] = [];
  todoList: any []= [];
  busUserList: any[]=[];


  ngOnInit(): void {
    debugger;
    this.getUsers();
    this.getTodoItems();
    this.getAllBusBookignUsers();
  }

  getUsers() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any) => {
      debugger;
      this.userList = result;
    })
  }

  getTodoItems() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((response:any)=>{
      this.todoList =  response;
    })
  }

  getAllBusBookignUsers() {
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers").subscribe((res:any)=>{
      this.busUserList =  res.data;
    })
  }
}
