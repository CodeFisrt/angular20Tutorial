import { Component, computed, inject, signal } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
  providers:[EmployeeService]
})
export class SignalEx {

  firstName: string = "Chetan";
  productName = "Moto"

  courseName =  signal<string>("Angular");

  courseDuration = signal("15 Videos");

  courseDetail =  computed(()=> this.courseName() + " - " + this.courseDuration())
  
  empService = inject(EmployeeService)

 // empService = new EmployeeService();
  constructor() {
    this.firstName = "Rahul";
    console.log(this.firstName);
    console.log(this.courseName())
    setTimeout(() => {
       this.courseName.set("React")
    }, 5000);

   
    console.log(this.courseName())
  }
  readData() {
    const cityName = this.empService.get('city')
    
  }
}
