import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


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
              private snackBar: MatSnackBar) { }
  ngOnInit() {
  }
  login(): void
  {
      if (this.authService.login(this.form.value.username, this.form.value.password))
      {
          this.snackBar.open('Succesfully registered ', '', {duration: 2000,
            panelClass: 'blue-snackbar'});
      }
      else
      {
        this.snackBar.open('Wrong username or passsword', '', {duration: 2000,
          panelClass: 'red-snackbar'});
      }
  }

}
