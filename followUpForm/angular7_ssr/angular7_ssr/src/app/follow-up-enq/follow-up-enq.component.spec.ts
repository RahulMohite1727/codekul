import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpEnqComponent } from './follow-up-enq.component';

describe('FollowUpEnqComponent', () => {
  let component: FollowUpEnqComponent;
  let fixture: ComponentFixture<FollowUpEnqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowUpEnqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpEnqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
