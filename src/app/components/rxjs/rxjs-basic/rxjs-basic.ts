import { Component } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';
@Component({
  selector: 'app-rxjs-basic',
  imports: [],
  templateUrl: './rxjs-basic.html',
  styleUrl: './rxjs-basic.css'
})
export class RxjsBasic {

  cityList: string[] = ["Pune", "Mumbai", "Nagpur"];

  cittList$ = of(["Pune", "Mumbai", "Nagpur"]);

  cityList2$ = from(["Pune", "Mumbai", "Nagpur"]);

  myInterval$ = interval(1000);

  timer$ = timer(5000);



  constructor() {

    this.timer$.subscribe(res => {
      console.log("Timer Executed");
    });

    this.myInterval$.subscribe((res: number) => {
      console.log('Intervale ' + res);
    });

    this.cittList$.subscribe((cityData: string[]) => {
      debugger;
      console.log(cityData);
    });

    this.cityList2$.subscribe((res: string) => {
      debugger;
    });

    const myObs$ = new Observable(value => {
      value.next("This is Demo Text")
    });


    myObs$.subscribe(message => {
      console.log(message)
    })



  }


}
