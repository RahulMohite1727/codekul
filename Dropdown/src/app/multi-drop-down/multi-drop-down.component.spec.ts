import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDropDownComponent } from './multi-drop-down.component';

describe('MultiDropDownComponent', () => {
  let component: MultiDropDownComponent;
  let fixture: ComponentFixture<MultiDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
