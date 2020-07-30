import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {AuthService} from './auth.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { EnumToStringPipe } from './enumToString.pipe';

@NgModule({
  declarations: [LoginComponent,
                 RegisterComponent,
                 EnumToStringPipe],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: []
})
export class AuthentificationModule { }
