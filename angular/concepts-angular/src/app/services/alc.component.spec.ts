import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcComponent } from './alc.component';

describe('AlcComponent', () => {
  let component: AlcComponent;
  let fixture: ComponentFixture<AlcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
