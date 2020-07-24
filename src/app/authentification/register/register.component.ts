import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';
import { WorkTeams } from 'src/app/_models/workTeams.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup ;
  workTeams =  Object.keys(WorkTeams);
  constructor(private authService: AuthService,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      team: ['', [Validators.required]],
    });

  console.log(WorkTeams);
  }

  get username(): AbstractControl {return this.form.get('username'); }
  get password(): AbstractControl {return this.form.get('password'); }

  register(): void
  {
      if (this.authService.login(this.form.value.username, this.form.value.password))
      {
          console.log('success');
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
