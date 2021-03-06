import { Injectable } from '@angular/core';
import {User } from '../_models/user';
import { WorkTeams } from '../_models/workTeams.enum';
import {EnumValues} from 'enum-values';
import { UserTypes } from '../_models/userTypes.enum';
import { Holiday } from '../_models/holiday';
import { WeekDay } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor() { }


public IoanaHoliday = new  Holiday(new Date(2020, 7, 20), new Date(2020, 7,  29));
public TonyHoliday = new  Holiday(new Date(2020, 7, 5), new Date(2020, 7,  21));


public listUser: User[] = [new User('Tony','123',UserTypes.Admin , null, this.TonyHoliday),
                    new User('Flaviu', '123'),
                    new User('Ema', '123'),
                    new User('Ioana', '123', UserTypes.NormalUser, WorkTeams.Hr, this.IoanaHoliday)];

public login(username: string, password: string): boolean
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

public register(user: User): boolean
{
  if (this.listUser.filter(a => a.username === user.username).length > 0)
  {
        return false;
  }
  this.listUser.push(user);
  return true;
}

public logOut(): boolean
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
public isLoggedIn(): boolean
{
  return (localStorage.getItem('username') != null);
}

public getUser(username: string): User
{
  return this.listUser.find(a => a.username === username);
}

public getLoggedInUser(): User
{
  return this.getUser(localStorage.getItem('username'));
}


public addHoliday(holiday: Holiday): void
{
  const user = this.getLoggedInUser();
  user.holiday = holiday;
  holiday.user = user;
}

public deleteHoliday(): boolean
{
  const user = this.getLoggedInUser();
  if (user.holiday === null)
  {
      return false;
  }
  user.holiday = null;
  return true;
}
}
