import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe, LowerCasePipe,TitleCasePipe,
    DatePipe,SlicePipe,JsonPipe, NaPipe],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css'
})
export class PipeEx {

  courseName = "angular";

  courseDuration = "DURATIPON is 3 mONTH ";

  currentDate: Date =  new Date();

  rollNoList: number[]= [111,112,113,114,115,116,117];

  studentObj: any = {
    name:'AAA',
    mobile: '9987667',
    address: {
      city:'Pune',
      state:""
    }
  }

}
