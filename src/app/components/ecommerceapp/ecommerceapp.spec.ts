import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecommerceapp } from './ecommerceapp';

describe('Ecommerceapp', () => {
  let component: Ecommerceapp;
  let fixture: ComponentFixture<Ecommerceapp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecommerceapp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ecommerceapp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
