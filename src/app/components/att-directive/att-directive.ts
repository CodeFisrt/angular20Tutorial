import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MasterService } from '../../services/master-service';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass,NgStyle,UpperCasePipe,
    LowerCasePipe,TitleCasePipe, SlicePipe,JsonPipe,DatePipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
  providers: [MasterService]
})
export class AttDirective implements OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  div1ClassName =  signal<string>("");
  masterSev=  inject(MasterService);
   constructor() {
    console.log("constructor")
     this.masterSev.petName = "Lion";
    setTimeout(() => {
       debugger;
        const petNameFromServiceVariable =  this.masterSev.petName; //Tiger
    }, 5000);
    
      
  }

  firstName: string = "chetan";
  courseName : string = "Angular 20 tutorial";

  rollNoList = [11,12,13,14,15,16,17]

  isDiv2Green: boolean =  false;

  curretDate: Date = new Date();



  studentObj: any = {
    name:'Chetan',
    city:'Pune',
    state: 'MH'
  }


 

  ngOnInit(): void {
    console.log("ngOnInit")
    //to trigger api calls
    //to subscribe
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    //to deal with viewChild
    //subscribe
  }

  
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")

    //unsubscirb
    //restrict use from navigating
  }




  setBgClass(className: string) {
    this.div1ClassName.set(className)
  }

  toggleDive2Color() {
    this.isDiv2Green =  ! this.isDiv2Green;
  }
}
