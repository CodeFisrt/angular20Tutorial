import { Component } from '@angular/core';
import { BehaviorSubject, delay, from, interval, Observable, of, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-ex',
  imports: [],
  templateUrl: './rxjs-ex.html',
  styleUrl: './rxjs-ex.css'
})
export class RxjsEx {

  ob1$ = new Observable<string>(data => {
    data.next("Angular")
  });

  cityList$ = of(["Thane", "Mumbai", "Pune"]);
  studentObj = of({ name: 'Aman', city: 'Pune' });

  countryList = from(['India', 'Uk', 'USA']);

  timer$ = interval(1000);

  currentCourse$ = new Subject<string>();

  couserDuration$ = new BehaviorSubject<string>("2 Months");

  couserFess$ = new ReplaySubject<string>(2);




  constructor() {
    this.currentCourse$.next("Angular");
    this.currentCourse$.next("React");

    this.couserDuration$.next("3 Month")
    this.couserDuration$.next("4 Month")
    this.couserDuration$.next("6 Month")
    

    this.couserFess$.next('6000');
    this.couserFess$.next('8000');
    this.couserFess$.next('12000');
    this.couserFess$.next('14000');

    this.timer$.pipe(
      delay(5000)
    ).subscribe((res) => {
      console.log('Timer ' + res)
    })

    // this.timer$.subscribe(()=>{
    //   console.log('timer$')
    // })
    this.ob1$.subscribe(res => {
      console.log('ob1', res)
    })
    this.getCityList();
    this.getSytudent();
    this.getCountryList();
    this.getCourseName();
    this.getCourseDuration();
    this.getCourseFees();

    this.couserDuration$.next("10 Month")
    this.couserDuration$.next("12 Month")
    this.couserDuration$.next("14 Month")
    this.couserDuration$.next("17 Month")
    this.couserDuration$.next("21 Month")
    this.couserDuration$.next("32 Month")
   
    this.currentCourse$.next("Dot Net");
    this.currentCourse$.next("Java")

    this.couserFess$.next('22000');
    this.couserFess$.next('32000');


    setTimeout(() => {
      this.currentCourse$.next("PHp")
    }, 3000);
  }



  getCourseName() {
    this.currentCourse$.subscribe((anem) => { 
    })
  }

  getCourseDuration() {
    this.couserDuration$.subscribe((anem) => {
      
    })
  }

  
  getCourseFees() {
    this.couserFess$.subscribe((anem) => {
      debugger;
    })
  }

  getCityList() {
    this.cityList$.subscribe(data => {
      console.log('city', data)
    })
  }
  getCountryList() {
    this.countryList.subscribe(data => {
      console.log('country ', data)
    })
  }
  getSytudent() {
    this.studentObj.subscribe(data => {
      console.log('studentObj', data)
    })
  }



}
