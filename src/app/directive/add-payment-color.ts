import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddPaymentColor]'
})
export class AddPaymentColor implements OnInit {

  @Input() paymentData: any;
  constructor(private elementRef: ElementRef, private render: Renderer2) { 
   
  }

  ngOnInit(): void {
       this.getFeesStatus()
  }

  getFeesStatus() {
    debugger;
    console.log("getFeesStatus")
    if (this.paymentData.totalFees == this.paymentData.totalReceived) {
      this.render.addClass(this.elementRef.nativeElement, 'row-full-paid')
    } else if (this.paymentData.totalReceived == 0) {
      this.render.addClass(this.elementRef.nativeElement, 'row-not-paid')
    } else {
      this.render.addClass(this.elementRef.nativeElement, 'row-partial-paid')

    }
  }
}
