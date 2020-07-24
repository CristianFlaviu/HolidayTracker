/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllHolidayListComponent } from './allHolidayList.component';

describe('AllHolidayListComponent', () => {
  let component: AllHolidayListComponent;
  let fixture: ComponentFixture<AllHolidayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllHolidayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHolidayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
