import { Injectable } from '@angular/core';
import {  MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

constructor(private snackBar: MatSnackBar) { }

public message(message: string): void
{
  this.snackBar.open(message, '', {duration: 2000,
    panelClass: 'blue-snackbar'});
}

public error(message: string): void
{
  this.snackBar.open(message, '', {duration: 2000,
              panelClass: 'red-snackbar'});
}

public success(message: string): void
{
  this.snackBar.open(message, '', {duration: 2000,
    panelClass: 'green-snackbar'});
}

}
