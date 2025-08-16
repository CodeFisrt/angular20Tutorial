import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterArrayPipe } from '../../pipes/filter-array-pipe';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule, FilterArrayPipe],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {

  isParaVisiable: boolean = true;

  startMonthName: string = "feb";
  userSearch = ''

  citList: string[]= ["Pune","Mumbai","Panji","Nagpur","Solapur", "Thane","Pune"];

  studentList: any [] = [
    {name: 'AAAA',city:'Pune',isActive:false}, 
    {name: 'BB',city:'Mumbai',isActive:false},
    {name: 'CCC',city:'Pune',isActive:true}, 
    {name: 'DDD',city:'Nagpur',isActive:false}
  ]

  showP() {
    this.isParaVisiable = true;
  }

  hideP() {
    this.isParaVisiable = false;
  }
}
