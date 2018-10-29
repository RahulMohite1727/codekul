import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocRefComponent } from './loc-ref.component';

describe('LocRefComponent', () => {
  let component: LocRefComponent;
  let fixture: ComponentFixture<LocRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
