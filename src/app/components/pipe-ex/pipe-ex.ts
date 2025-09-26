import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { NaPipe } from '../../pipes/na-pipe';
import { Master } from '../../services/master';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe, LowerCasePipe,TitleCasePipe,
    DatePipe,SlicePipe,JsonPipe, NaPipe],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css'
})
export class PipeEx  implements AfterViewInit{

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

  master= inject(Master);
  currentCounet= 0;

  ngAfterViewInit(): void {
    this.master.$currentCounterSubject.subscribe((res)=>{
      debugger;
        this.currentCounet =  res;
    })
    this.master.$curretCouneteBehvaiourSub.subscribe((res)=>{
      debugger;
        this.currentCounet =  res;
    })
  }

}
