import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataformsComponent } from './dataforms.component';

describe('DataformsComponent', () => {
  let component: DataformsComponent;
  let fixture: ComponentFixture<DataformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
