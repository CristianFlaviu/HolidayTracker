import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';
import { WorkTeams } from 'src/app/_models/workTeams.enum';
import { User } from 'src/app/_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup ;
  workTeams = WorkTeams;
  constructor(private authService: AuthService,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private router: Router) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      team: ['', [Validators.required]],
    });

  }

  get username(): AbstractControl {return this.form.get('username'); }
  get password(): AbstractControl {return this.form.get('password'); }
  get team(): AbstractControl {return this.form.get('team'); }

  register(): void
  {
      const newUser = new User(this.username.value, this.password.value, this.team.value);
      if (this.authService.register(newUser))
      {  
          this.snackBar.open('Succesfully registered ', '', {duration: 2000,
          panelClass: 'blue-snackbar'});
        
      }
      else
      {
           this.snackBar.open('Username already exist', '', {duration: 2000,
          panelClass: 'red-snackbar'});
      }
  }

}
