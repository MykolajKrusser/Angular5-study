import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDelailComponent } from './employee-delail.component';

describe('EmployeeDelailComponent', () => {
  let component: EmployeeDelailComponent;
  let fixture: ComponentFixture<EmployeeDelailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDelailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDelailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
