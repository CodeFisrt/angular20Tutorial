import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjs2 } from './rxjs2';

describe('Rxjs2', () => {
  let component: Rxjs2;
  let fixture: ComponentFixture<Rxjs2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rxjs2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rxjs2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
