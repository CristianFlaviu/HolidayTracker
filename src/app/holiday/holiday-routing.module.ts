import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HolidayListComponent} from './holidayList/holidayList.component';
import {AllHolidayListComponent} from './allHolidayList/allHolidayList.component';
const routes: Routes = [{path: 'colleagues', component: HolidayListComponent },
                        {path: 'all', component: AllHolidayListComponent},
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayRoutingModule { }
