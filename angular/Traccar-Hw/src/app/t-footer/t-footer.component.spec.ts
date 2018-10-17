import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFooterComponent } from './t-footer.component';

describe('TFooterComponent', () => {
  let component: TFooterComponent;
  let fixture: ComponentFixture<TFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
