import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TJumboComponent } from './t-jumbo.component';

describe('TJumboComponent', () => {
  let component: TJumboComponent;
  let fixture: ComponentFixture<TJumboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TJumboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TJumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
