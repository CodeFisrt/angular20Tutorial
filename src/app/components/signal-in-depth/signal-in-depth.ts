import { JsonPipe } from '@angular/common';
import { Component, computed, effect, ElementRef, Signal, signal, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alert } from "../../reusableComponent/alert/alert";
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signal-in-depth',
  imports: [JsonPipe, FormsModule, Alert],
  templateUrl: './signal-in-depth.html',
  styleUrl: './signal-in-depth.css'
})
export class SignalInDepth {

  courseName = signal("Angular");

  courseDuration =  signal<string>("2 Months");

  cityList =  signal<string[]>(["Mumbai","Nagpur","Pune"]);

  stateList: Signal<string[]> =  signal<string[]>(["MH","MP","Punjab","Goa"]);

  studentObj = signal<any>({name:'ABC',city:'Pune'});

  employeeObj = signal<any>({empId:11,empName:'',empCity:'',empPinCode:'',empState:''})

  cityName: string = "";

  fName = signal("");
  mNAme = signal("");
  lName = signal("");

  fullName = computed(()=> this.fName() + " " + this.mNAme() +" "+ this.lName())


  //@ViewChild("cityNameText") cityNameViewChild!: ElementRef; 

  cityNameViewChild = viewChild<ElementRef<HTMLInputElement>>('cityNameText');

  constructor(private http: HttpClient) {

    effect(()=>{
      console.log("Effect Called", this.fName() + this.mNAme())
    })
    const course_name =  this.courseName(); 
    this.cityNameViewChild()?.nativeElement
    
    const resul = this.http.get("").subscribe((reult:any)=>{

    })
    
    const userList =  toSignal(this.http.get(""),{initialValue:[]});

  }

  updateFName(event:any) {
    this.fName.set(event.target.value)
  }
  updateMName(event:any) {
    this.mNAme.set(event.target.value)
  }
  updateLName(event:any) {
    this.lName.set(event.target.value)
  }

  chnageCourseNma() {
    this.courseName.set("React Js Tutorail")
  }

  chnageArray() {
    this.cityList.set(["Thane","Panji","Solapur"]);
  }

  addCity() {
    this.cityList.update(oldCityList=> ([...oldCityList,this.cityName]))
  }

  changeEmpIdValue(event: any) {
    const value = event.target.value;
    this.employeeObj.update(oldObj=> ({...oldObj, empId:value }))
  }

  changeFormValue(keyName: string, event: any) {
   const value = event.target.value;
    this.employeeObj.update(oldObj=> ({...oldObj, [keyName]:value }))
  }


}
