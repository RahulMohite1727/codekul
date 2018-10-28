import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPnlComponent } from './btn-pnl.component';

describe('BtnPnlComponent', () => {
  let component: BtnPnlComponent;
  let fixture: ComponentFixture<BtnPnlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnPnlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
