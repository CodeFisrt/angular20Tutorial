import { Component, inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-sub-beh-replay',
  imports: [],
  templateUrl: './sub-beh-replay.html',
  styleUrl: './sub-beh-replay.css'
})
export class SubBehReplay implements OnInit{

  studentName$ = new Subject();

  rollNO$ =  new Subject<number>();

  takeTill = new Subject<void>();

  courseName: Subject<string> = new Subject<string>();




  //initSubject = new Subject("ABC");

  userSrv = inject(UserService)


  constructor(){
    setTimeout(() => {
         this.studentName$.next("Angular 20");
         this.rollNO$.next(123);
         this.takeTill.next();
         this.userSrv.$courseDuration.next("3 month + 1 week");
    }, 4000);
   
  }

  ngOnInit(): void {
    this.userSrv.$courseDuration.subscribe((Res:any)=>{
      debugger;
    })
    this.studentName$.subscribe((res:any)=>{
      debugger;
    })
    this.rollNO$.subscribe((res:any)=>{
      debugger;
    })
  }

}
