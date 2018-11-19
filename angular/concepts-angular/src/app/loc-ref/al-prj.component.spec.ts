import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlPrjComponent } from './al-prj.component';

describe('AlPrjComponent', () => {
  let component: AlPrjComponent;
  let fixture: ComponentFixture<AlPrjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlPrjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlPrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
