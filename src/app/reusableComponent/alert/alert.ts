import { NgClass } from '@angular/common';
import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, contentChild, ElementRef, EventEmitter, input, Input, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [NgClass],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Alert implements OnInit , AfterViewInit, AfterViewChecked{

  //@Input() alertTitle: string = '';

  alertTitle = input<string>("");

  //@Output() onClose =  new EventEmitter<string>();

  onClose = output<string>();

  @ContentChild('alertIcon') alertIconRef!: ElementRef;

  alertColorClassName: string = 'alert-success';

  ngOnInit(): void {
    console.log("ngOnInit")
    this.onClose.emit("")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
     console.log("ngAfterViewChecked")
  }
  printUiRender() {
    console.log("UI reRender")
  }


  closeICon() {
    debugger;
    const text =  this.alertIconRef.nativeElement.innerText;
  }
}
