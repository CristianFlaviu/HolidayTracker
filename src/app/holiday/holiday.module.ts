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



@NgModule({
  declarations: [AllHolidayListComponent,
                HolidayListComponent],
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
    MatSelectModule
  ]
})
export class HolidayModule { }
