import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
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

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authService: AuthService,
              private snackBar: MatSnackBar,
              private router: Router) { }
  ngOnInit(): void {
    const devType = WorkTeams.Dev;
    }
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
