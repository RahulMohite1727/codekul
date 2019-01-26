import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyanmicRowAddDeleteComponent } from './dyanmic-row-add-delete.component';

describe('DyanmicRowAddDeleteComponent', () => {
  let component: DyanmicRowAddDeleteComponent;
  let fixture: ComponentFixture<DyanmicRowAddDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyanmicRowAddDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyanmicRowAddDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
