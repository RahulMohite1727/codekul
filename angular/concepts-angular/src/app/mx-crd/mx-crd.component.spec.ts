import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MxCrdComponent } from './mx-crd.component';

describe('MxCrdComponent', () => {
  let component: MxCrdComponent;
  let fixture: ComponentFixture<MxCrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MxCrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MxCrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
