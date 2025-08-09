import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBasic } from './rxjs-basic';

describe('RxjsBasic', () => {
  let component: RxjsBasic;
  let fixture: ComponentFixture<RxjsBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
