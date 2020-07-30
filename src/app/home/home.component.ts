import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentification/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authSerice: AuthService) {

    console.log(authSerice.listUser);
  }

  ngOnInit(): void{
  }

}
