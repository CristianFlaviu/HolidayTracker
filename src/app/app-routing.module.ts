import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './notFoundPage/notFoundPage.component';

const routes: Routes = [{path: 'auth',
                        loadChildren: () => import ('./authentification/authentification.module').then( m => m.AuthentificationModule)},
                        {path: 'holiday',
                        loadChildren: () => import ('./holiday/holiday.module').then( m => m.HolidayModule)},
                        {path: 'home', component: HomeComponent},
                        {path: '', redirectTo: 'home', pathMatch: 'full'},
                        {path: '**', component: NotFoundPageComponent},
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
