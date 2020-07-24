import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HolidayListComponent} from './holidayList/holidayList.component';
import {AllHolidayListComponent} from './allHolidayList/allHolidayList.component';
import { CreateEditHolidayComponent } from './create-edit-Holiday/create-edit-Holiday.component';
const routes: Routes = [{path: 'colleagues', component: HolidayListComponent },
                        {path: 'all', component: AllHolidayListComponent},
                        {path: 'create', component: CreateEditHolidayComponent }
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayRoutingModule { }
