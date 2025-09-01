import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContentChildren } from './view-content-children';

describe('ViewContentChildren', () => {
  let component: ViewContentChildren;
  let fixture: ComponentFixture<ViewContentChildren>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewContentChildren]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewContentChildren);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
