import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsEx } from './rxjs-ex';

describe('RxjsEx', () => {
  let component: RxjsEx;
  let fixture: ComponentFixture<RxjsEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsEx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
