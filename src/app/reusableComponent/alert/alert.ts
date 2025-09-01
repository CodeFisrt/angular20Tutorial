import { NgClass } from '@angular/common';
import { Component, ContentChild, contentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [NgClass],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert {

  @Input() alertTitle: string = '';
  @ContentChild('alertIcon') alertIconRef!: ElementRef;

  alertColorClassName: string = '';


  closeICon() {
    debugger;
    const text =  this.alertIconRef.nativeElement.innerText;
  }
}
