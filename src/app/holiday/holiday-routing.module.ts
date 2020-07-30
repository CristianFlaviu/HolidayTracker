import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HolidayListComponent} from './holidayList/holidayList.component';
import {AllHolidayListComponent} from './allHolidayList/allHolidayList.component';
import { CreateEditHolidayComponent } from './create-edit-Holiday/create-edit-Holiday.component';
import { CreateHolidayComponent } from './createHoliday/createHoliday.component';
import { EditHolidayComponent } from './editHoliday/editHoliday.component';
import { RoleGuard } from '../_guards/roleGuard';
import { ChildFullCalendarComponent } from './childFullCalendar/childFullCalendar.component';

const routes: Routes = [{path: 'colleagues', component: HolidayListComponent },
                        {path: 'all', component: AllHolidayListComponent,
                                      canActivate: [RoleGuard],
                                      data: {expectedRole: ['Admin'] } },
                        {path: 'create', component: CreateHolidayComponent },
                        {path: 'edit', component: EditHolidayComponent},
                        {path: 'calendar', component: ChildFullCalendarComponent}
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayRoutingModule { }
