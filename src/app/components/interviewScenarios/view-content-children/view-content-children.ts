import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, viewChild, ViewChildren } from '@angular/core';
import { Alert } from '../../../reusableComponent/alert/alert';

@Component({
  selector: 'app-view-content-children',
  imports: [Alert],
  templateUrl: './view-content-children.html',
  styleUrl: './view-content-children.css'
})
export class ViewContentChildren implements AfterViewInit {


  @ViewChild('amount') amount!: ElementRef;

  @ViewChild(Alert) alertCompoInstance!: Alert;

  @ViewChildren(Alert) alertBoxList!: QueryList<Alert>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.alertBoxList.forEach((alertComp, i) => {
        if (i == 0) {
          alertComp.alertColorClassName = "alert-danger"
        }
        if (i == 1) {
          alertComp.alertColorClassName = "alert-warning"
        }
        if (i == 2) {
          alertComp.alertColorClassName = "alert-secondary"
        }
      })
    }, 3000);

  }

  readValue() {
    debugger;
    const textvalue = this.amount.nativeElement.value;

    const alerText = this.alertCompoInstance.alertTitle;
  }

}
