import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentification/auth.service';
import { Router } from '@angular/router';
import { UserTypes } from '../_models/userTypes.enum';

@Component({
  selector:'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {

  admin: UserTypes.Admin;
  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logOut(): void
  {
    this.authService.logOut();
    this.router.navigate(['/home']);
  }

}
