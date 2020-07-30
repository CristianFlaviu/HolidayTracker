import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import {AuthService} from '../authentification/auth.service';
import {SnackbarService} from '../snackbar.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService,
                private snackbarService: SnackbarService,
                private router: Router)
        {}
    canActivate(): boolean
    {
        if (this.authService.isLoggedIn())
        {
            return true;
        }
        this.snackbarService.error('Not Registered');
        this.router.navigate(['\home']);
    }
}
