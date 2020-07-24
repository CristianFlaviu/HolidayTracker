import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AppModule} from '../app.module';
import { EnumToStringPipe } from './enumToString.pipe';

const routes: Routes = [{path: 'login', component: LoginComponent},
                        {path: 'register', component: RegisterComponent}];

@NgModule({
   imports: [
      RouterModule.forChild(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
   ]
})
export class AuthentificationRoutingModule { }
