import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtJmbComponent } from './bt-jmb.component';

describe('BtJmbComponent', () => {
  let component: BtJmbComponent;
  let fixture: ComponentFixture<BtJmbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtJmbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtJmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
