import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TCartComponent } from './t-cart.component';

describe('TCartComponent', () => {
  let component: TCartComponent;
  let fixture: ComponentFixture<TCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
