import { Injectable } from '@angular/core';
import {User } from '../_models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor() { }

listUser: User[] = [new User('Tony','passwod'),
                    new User('Flaviu','password')];


}
