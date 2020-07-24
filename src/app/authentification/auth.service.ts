import { Injectable } from '@angular/core';
import {User } from '../_models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor() { }

listUser: User[] = [new User('Tony', '123'),
                    new User('Flaviu', '123'),
                    new User('Ema', '123')];

login(username: string, password: string): boolean
{
  console.log(username + ' ' + password );
  for (const user of this.listUser )
  {
    if (username === user.username && password === user.password)
    {
      return true;
    }
  }
  return false;
}

register(user: User): boolean
{
  if (this.listUser.filter(a => a.username === user.username))
  {
    return false;
  }
  this.listUser.concat(user);
  return true;
}
}
