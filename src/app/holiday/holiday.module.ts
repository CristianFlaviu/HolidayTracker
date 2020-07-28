import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayRoutingModule } from './holiday-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { AllHolidayListComponent } from './allHolidayList/allHolidayList.component';
import { HolidayListComponent } from './holidayList/holidayList.component';
import { MatTableModule } from '@angular/material/table';
import {CreateEditHolidayComponent} from './create-edit-Holiday/create-edit-Holiday.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import {CreateHolidayComponent } from './createHoliday/createHoliday.component';
import {EditHolidayComponent} from './editHoliday/editHoliday.component';

@NgModule({
  declarations: [AllHolidayListComponent,
                HolidayListComponent,
                CreateEditHolidayComponent,
                CreateHolidayComponent,
                EditHolidayComponent],
  imports: [
    CommonModule,
    HolidayRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ]
})
export class HolidayModule { }
