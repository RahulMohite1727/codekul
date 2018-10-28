import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrComComponent } from './intr-com.component';

describe('IntrComComponent', () => {
  let component: IntrComComponent;
  let fixture: ComponentFixture<IntrComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
