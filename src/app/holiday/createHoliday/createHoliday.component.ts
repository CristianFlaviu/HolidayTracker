import { Component, OnInit } from '@angular/core';
import {CreateEditHolidayComponent} from '../create-edit-Holiday/create-edit-Holiday.component';

@Component({
  selector: 'app-createHoliday',
  templateUrl: './createHoliday.component.html',
  styleUrls: ['./createHoliday.component.css']
})
export class CreateHolidayComponent implements OnInit {

  formParentTitle = 'Create Holiday';
  constructor() { }

  ngOnInit(): void {
  }

}
