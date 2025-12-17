import { Component, inject } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';
import { Admin } from '../../admin/admin';
import { AttDirective } from '../../att-directive/att-directive';
import { MasterService } from '../../../services/master-service';
@Component({
  selector: 'app-rxjs-basic',
  imports: [Admin,AttDirective],
  templateUrl: './rxjs-basic.html',
  styleUrl: './rxjs-basic.css'
})
export class RxjsBasic {

  cityList: string[] = ["Pune", "Mumbai", "Nagpur"];

  cittList$ = of(["Pune", "Mumbai", "Nagpur"]);

  cityList2$ = from(["Pune", "Mumbai", "Nagpur"]);

  myInterval$ = interval(1000);

  timer$ = timer(5000);

  masterSrv =  inject(MasterService)

  constructor() {
    setTimeout(() => {
             debugger;
       const petNameFromServiceVariable =  this.masterSrv.petName; //Tiger
    }, 10000);
    this.timer$.subscribe(res => {
      console.log("Timer Executed");
    });

    this.myInterval$.subscribe((res: number) => {
      console.log('Intervale ' + res);
    });

    this.cittList$.subscribe((cityData: string[]) => {
      
      console.log(cityData);
    });

    this.cityList2$.subscribe((res: string) => {
      
    });

    const myObs$ = new Observable(value => {
      value.next("This is Demo Text")
    });


    myObs$.subscribe(message => {
      console.log(message)
    })



  }


}
