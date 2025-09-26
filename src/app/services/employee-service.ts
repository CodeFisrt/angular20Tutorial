import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  serviceData:any = {};

  constructor() { 
    
  }

  showMessage() {
    alert("Welcome")
  }

  get(key: string) {
    return this.serviceData[key]
  }

  set(key: string, value: any) {
    this.serviceData[key] =  value;
  }


}
