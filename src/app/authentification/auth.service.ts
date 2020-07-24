import { Injectable } from '@angular/core';
import {User } from '../_models/user';
import { WorkTeams } from '../_models/workTeams.enum';
import {EnumValues} from 'enum-values';
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
  for (const user of this.listUser )
  {
    if (username === user.username && password === user.password)
    {
      localStorage.setItem('username', user.username);
      localStorage.setItem('team', user.team);
      localStorage.setItem('role', user.userType);
      return true;
    }
  }
  return false;
}

register(user: User): boolean
{
  if (this.listUser.filter(a => a.username === user.username).length > 0)
  {
        return false;
  }
  this.listUser.push(user);
  return true;
}

logOut(): boolean
{
  if (this.isLoggedIn)
  {
    localStorage.removeItem('username');
    localStorage.removeItem('team');
    localStorage.removeItem('role');
    return true;
  }
  return false;
}
isLoggedIn(): boolean
{
  return (localStorage.getItem('username') != null);
}

getUser(username: string): User
{
  return this.listUser.find(a => a.username);
}
}
