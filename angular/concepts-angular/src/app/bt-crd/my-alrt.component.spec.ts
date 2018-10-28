import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAlrtComponent } from './my-alrt.component';

describe('MyAlrtComponent', () => {
  let component: MyAlrtComponent;
  let fixture: ComponentFixture<MyAlrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAlrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAlrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
