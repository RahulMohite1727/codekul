import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtCrdComponent } from './bt-crd.component';

describe('BtCrdComponent', () => {
  let component: BtCrdComponent;
  let fixture: ComponentFixture<BtCrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtCrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtCrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
