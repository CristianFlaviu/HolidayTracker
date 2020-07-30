import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl  } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { WorkTeams } from 'src/app/_models/workTeams.enum';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService,
              private snackBar: MatSnackBar,
              private router: Router,
              private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });


    }

  get username(): AbstractControl {return this.form.get('username'); }
  get password(): AbstractControl {return this.form.get('password'); }

  login(): void
  {
    if (this.authService.login(this.form.value.username, this.form.value.password))
      {
          this.snackBar.open('Succesfully LoggedIn ', '', {duration: 2000,
                          panelClass: 'blue-snackbar'});

          this.router.navigate(['/home']);
      }
      else
      {
        this.snackBar.open('Wrong username or passsword', '', {duration: 2000,
          panelClass: 'red-snackbar'});
      }
  }

  logout(): void
  {
    if (this.authService.logOut())
    {
      this.snackBar.open('You are Logout ', '', {duration: 2000,
        panelClass: 'blue-snackbar'});
    }
    this.snackBar.open('You are not login ', '', {duration: 2000,
      panelClass: 'red-snackbar'});
  }
}
